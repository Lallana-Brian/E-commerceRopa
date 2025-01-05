import React from "react";
import "./SearchBar.css"; // Archivo CSS para estilos

const SearchSection = () => {
  return (
    <section className="search-section">
      <h2 className="search-title">¡Suscríbete a Nuestro Boletín!</h2>
      <h3 className="search-subtitle">Recibe las últimas noticias, promociones y novedades directamente en tu correo.</h3>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="@example.gmail/hotmail"
        />
        <button className="search-button">Suscríbete</button>
      </div>
    </section>
  );
};

export default SearchSection;
