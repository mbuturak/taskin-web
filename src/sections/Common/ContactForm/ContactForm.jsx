'use client';
import { useState } from 'react';

// Office locations for dropdown
const officeLocations = [
  {
    id: 1,
    name: "Task-In Services (Headquarters)",
    email: "info@taskinservices.com",
    location: "Netherlands"
  },
  {
    id: 2,
    name: "Task-In Baltic Services Oy",
    email: "baltic@taskinservices.com",
    location: "Finland"
  },
  {
    id: 3,
    name: "Task-In Germany",
    email: "germany@taskinservices.com",
    location: "Germany"
  },
  {
    id: 4,
    name: "Task-In USA",
    email: "ops@taskinusa.com",
    location: "USA"
  }
];

const ContactForm = ({theme = 'light'}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    company: '',
    location: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Theme-based styling
  const isDark = theme === 'dark';
  
  const containerStyle = {
    width: '100%',
    maxWidth: '100%',
    padding: '30px',
    borderRadius: '8px',
    //backgroundColor: isDark ? 'transparent' : '#f9fafb',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: isDark ? 'white' : '#1f2937',
    fontSize: '14px'
  };

  const inputStyle = {
    width: '100%',
    maxWidth: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    backgroundColor: 'white',
    color: isDark ? 'white' : '#1f2937',
    boxSizing: 'border-box'
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get selected location email or default to headquarters
      const selectedLocation = officeLocations.find(loc => loc.id === parseInt(formData.location));
      const toEmail = selectedLocation ? selectedLocation.email : 'info@taskinservices.com';
      const locationName = selectedLocation ? selectedLocation.name : 'Headquarters';

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          toEmail,
          locationName
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          title: '',
          company: '',
          location: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container" style={containerStyle}>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div className="form-group" style={{ flex: '1 1 50%' }}>
            <label htmlFor="fullName" style={labelStyle}>
              Full name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
          <div className="form-group" style={{ flex: '1 1 50%' }}>
            <label htmlFor="title" style={labelStyle}>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              placeholder="e.g., Sales Manager"
            />
          </div>
        </div>

        

        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div className="form-group" style={{ flex: 1, minWidth: 0 }}>
            <label htmlFor="company" style={labelStyle}>
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
          <div className="form-group" style={{ flex: 1, minWidth: 0 }}>
            <label htmlFor="location" style={labelStyle}>
              Contact To
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              style={{
                // taban
                ...inputStyle,
            
                // dikey hizalamayı düzelt
                height: 44,                 // sabit yükseklik
                padding: '0 12px',          // üst/alt 0: metin ortalanır
                lineHeight: '44px',         // (çoğu tarayıcıda) metni ortalar
                boxSizing: 'border-box',
            
                // tarayıcı varsayılanlarını sıfırla
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
            
                // imleç ve renkler
                cursor: 'pointer',
                color: formData.location ? '#1f2937' : '#6b7280',
            
                // ok ikonu (gerekirse)
                backgroundImage:
                  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none' stroke='gray' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 8 10 12 14 8'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 10px center',
                backgroundOrigin: 'content-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            >
              <option value="" style={{ color: '#6b7280' }}>Select a location (optional)</option>
              {officeLocations.map((location) => (
                <option key={location.id} value={location.id} style={{ color: '#1f2937' }}>
                  {location.name} - {location.location}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div className="form-group" style={{ flex: 1, minWidth: 0 }}>
            <label htmlFor="email" style={labelStyle}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
          <div className="form-group" style={{ flex: 1, minWidth: 0 }}>
            <label htmlFor="phone" style={labelStyle}>
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>
        </div>


        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={labelStyle}>
            Specify how we can help *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            style={{
              ...inputStyle,
              resize: 'vertical',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            placeholder="Please describe your inquiry in detail..."
          />
        </div>

        {submitStatus === 'success' && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#d1fae5',
            border: '1px solid #10b981',
            borderRadius: '8px',
            color: '#065f46',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div style={{
            padding: '12px 16px',
            backgroundColor: '#fee2e2',
            border: '1px solid #ef4444',
            borderRadius: '8px',
            color: '#991b1b',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            Sorry, there was an error sending your message. Please try again or contact us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px 20px',
            backgroundColor: isSubmitting ? '#9ca3af' : isDark ? '#27617A' : '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#2563eb';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.target.style.backgroundColor = '#3B82F6';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
