import Link from "next/link";

// bgPosition: CSS background-position (örn: "center 20%" ile görseli yukarı kaydırır)
// zoom: background-size yüzde (100 normal, <100 zoom-out, >100 zoom-in)
const Breadcumb = ({ title,bgImage,style, bgPosition = "center", zoom = 100 }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        // Arka plan görseli kaynağı
        backgroundImage: `url(${bgImage})`,
        // Zoom kontrolünü CSS değişkeni ile geçir (global .breadcumb-wrapper bunu kullanır)
        ['--breadcumb-bg-size']: `${zoom}%`,
        // Tekrarlamayı kapat
        backgroundRepeat: 'no-repeat',
        // Görseli eksenlerde konumlandır (örn: "center 20%" yukarı taşır)
        backgroundPosition: bgPosition,
        // Dışarıdan gelen stiller en sonda
        ...style,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link href="/">
                    <i className="ri-home-4-fill"></i> HOME
                  </Link>
                </li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
