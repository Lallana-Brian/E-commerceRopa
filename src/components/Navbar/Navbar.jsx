import React from "react";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <header className="header" id="header">
  <nav className="nav">
    <a href="index.html" className="nav__logo">
      <i className="bx bxs-shopping-bags nav__logo-icon"></i> REPÚBLICA
    </a>

    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="index.html" className="nav__link active-link">Inicio</a>
        </li>
        <li className="nav__item">
          <a href="shop.html" className="nav__link">Tienda</a>
        </li>
        <li className="nav__item">
          <a href="cart.html" className="nav__link">Carrito</a>
        </li>
        <li className="nav__item">
          <a href="blog.html" className="nav__link">Blog</a>
        </li>
        <li className="nav__item">
          <a href="contact.html" className="nav__link">Contacto</a>
        </li>
      </ul>








          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__btns">
          <div className="login__toggle" id="login-button">
            <i className="bx bx-user"></i>
          </div>
          <div className="nav__shop" id="cart-shop">
            <i className="bx bx-shopping-bag"></i>
          </div>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
