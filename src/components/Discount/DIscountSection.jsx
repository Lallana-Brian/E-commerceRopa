import React from "react";
import "./DiscountSection.css"; // Asegúrate de tener un archivo de estilo

const DiscountSection = () => {
  return (
    <section className="discount section">
      <div className="discount__container container grid">
        <img src="/images/discount.png" alt="Descuento" className="discount__img" />
        <div className="discount__data">
          <h2 className="discount__title">30% OFF <br /> En nuevos productos</h2>
          <a href="#newArrivals" className="button">Ir a lo nuevo</a>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
