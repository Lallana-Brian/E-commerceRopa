import React from "react";
import "./Footer.css"; // Archivo CSS para estilos

const Footer = () => {
  return (
    <footer className="footer">
      {/* Primera columna con enlaces sociales al principio */}
      <div className="footer-column">
        <h2 className="footer-title">Síguenos</h2>
        <h3 className="footer-subtitle">Conéctate con nosotros en nuestras redes sociales</h3>
        <ul className="social-links">
          <li>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        </ul>
      </div>

      {/* Segunda columna con mensaje de suscripción */}
      <div className="footer-column">
        <h2 className="footer-title">¡Mantente Conectado!</h2>
        <h3 className="footer-subtitle">Suscríbete para recibir nuestras últimas novedades</h3>
      </div>

      {/* Tercera columna con servicios */}
      <div className="footer-column">
        <h2 className="footer-title">Servicios</h2>
        <h3 className="footer-subtitle">Ofrecemos una variedad de productos de calidad</h3>
      </div>
    </footer>
  );
};

export default Footer;
