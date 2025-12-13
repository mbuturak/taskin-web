import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      company, 
      location, 
      email, 
      phone, 
      message, 
      consent,
      toEmail,
      ccEmail,
      locationName,
      emailHtml,
      subject
    } = body;

    // Validate required fields
    if (!fullName || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Debug: Environment değişkenlerini kontrol et (şifre hariç)
    console.log('SMTP Configuration:', {
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: process.env.NEXT_PUBLIC_SMTP_PORT,
      secure: process.env.NEXT_PUBLIC_SMTP_SECURE,
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      hasPassword: !!process.env.NEXT_PUBLIC_SMTP_PASS,
    });

    // E-posta taşıyıcı - Office 365 için optimize edilmiş konfigürasyon
    // Office 365 için farklı port ve ayar kombinasyonları denenecek
    const smtpConfig = {
      host: process.env.NEXT_PUBLIC_SMTP_HOST || 'smtp.office365.com',
      port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT) || 587,
      secure: false, // Port 587 için her zaman false (STARTTLS kullanılır)
      requireTLS: true, // Office 365 için STARTTLS zorunlu
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
      // TLS ayarları - Office 365 için optimize
      tls: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true, // Sertifika doğrulaması aktif
      },
      connectionTimeout: 30000, // 30 saniye (artırıldı)
      greetingTimeout: 30000,
      socketTimeout: 30000,
      // Connection pool ayarları
      pool: false, // Pool'u kapatıyoruz, bazı durumlarda sorun çıkarabiliyor
      debug: true, // Debug modunu açıyoruz
      logger: true, // Logger'ı açıyoruz
    };

    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify connection configuration - Office 365 için özel kontroller
    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP Connection verification failed:', {
        code: verifyError.code,
        responseCode: verifyError.responseCode,
        command: verifyError.command,
        response: verifyError.response,
        message: verifyError.message,
      });
      
      // SMTP AUTH hatası için özel mesaj
      if (verifyError.code === 'EAUTH' && verifyError.responseCode === 535) {
        const errorResponse = verifyError.response || '';
        let troubleshooting = [];
        
        if (errorResponse.includes('SmtpClientAuthentication is disabled')) {
          troubleshooting = [
            '1. PowerShell ile: Set-TransportConfig -SmtpClientAuthenticationDisabled $false',
            '2. Kullanıcı seviyesinde: Set-CASMailbox -Identity automation@taskinservices.com -SmtpClientAuthenticationDisabled $false',
            '3. Ayarların yayılması için 15-30 dakika bekleyin'
          ];
        } else if (errorResponse.includes('did not meet the criteria')) {
          troubleshooting = [
            '1. Security Defaults\'u kontrol edin: Azure AD > Properties > Manage Security defaults (kapalı olmalı)',
            '2. Conditional Access politikalarını kontrol edin',
            '3. Şifrenin doğru olduğundan emin olun',
            '4. MFA\'nın tamamen kapatıldığından emin olun',
            '5. Ayarların yayılması için 15-30 dakika bekleyin'
          ];
        } else {
          troubleshooting = [
            '1. Şifrenin doğru olduğundan emin olun',
            '2. MFA\'nın tamamen kapatıldığından emin olun',
            '3. Security Defaults kapalı olmalı',
            '4. Ayarların yayılması için 15-30 dakika bekleyin'
          ];
        }
        
        return NextResponse.json(
          { 
            error: 'SMTP Authentication failed',
            message: verifyError.response || 'Authentication unsuccessful',
            troubleshooting,
            details: 'Visit https://aka.ms/smtp_auth_disabled for more information.'
          },
          { status: 500 }
        );
      }
      throw verifyError;
    }

    // Email content
    const emailSubject = subject || `New Contact Form Submission - General Inquiry`;
    
    const emailContent = emailHtml || `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Selected Location:</strong> ${locationName || 'Not specified'}</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>

        <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Note:</strong> This message was sent to ${toEmail} based on the selected location.
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Task-In Services contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    // Tek alıcı (TO) ve opsiyonel CC ile gönder
    const mailOptions = {
      from: {
        name: process.env.NEXT_PUBLIC_FROM_NAME || 'TaskIn Maritime',
        address: process.env.NEXT_PUBLIC_FROM_EMAIL || 'noreply@ossifybio.com'
      },
      to: toEmail,
      cc: ccEmail || undefined,
      subject: emailSubject,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', {
      code: error.code,
      responseCode: error.responseCode,
      command: error.command,
      response: error.response,
      message: error.message,
      stack: error.stack,
    });
    
    // SMTP AUTH hatası için özel mesaj
    if (error.code === 'EAUTH' && error.responseCode === 535) {
      return NextResponse.json(
        { 
          error: 'SMTP Authentication failed',
          message: 'SmtpClientAuthentication is disabled for the Tenant.',
          troubleshooting: [
            '1. Microsoft 365 Admin Center > Settings > Org settings > Modern authentication > Authenticated SMTP\'yi etkinleştirin',
            '2. PowerShell ile: Set-TransportConfig -SmtpClientAuthenticationDisabled $false',
            '3. Kullanıcı seviyesinde: Set-CASMailbox -Identity automation@taskinservices.com -SmtpClientAuthenticationDisabled $false',
            '4. MFA aktifse App Password kullanın (normal şifre yerine)',
            '5. Security Defaults kapalı olmalı',
            '6. Ayarların yayılması için 15-30 dakika bekleyin'
          ],
          details: 'Visit https://aka.ms/smtp_auth_disabled for more information.',
          response: error.response
        },
        { status: 500 }
      );
    }
    
    // Diğer hatalar için genel mesaj
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        message: error.message || 'Unknown error occurred',
        code: error.code,
        response: error.response
      },
      { status: 500 }
    );
  }
}
