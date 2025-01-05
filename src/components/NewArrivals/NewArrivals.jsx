import React from "react";
import { HomeIcon } from '@heroicons/react/24/solid';
import "./NewArrivals.css";


const NewArrivals = () => {
  // Datos de los nuevos ingresos
  const newItems = [
    {
      tag: "Nuevo",
      img: "images/ingresos/t-shirt-menu.png",
      title: "Remera",
      subtitle: "Accesorio",
      price: "$15.500",
      discount: "$20.000",
      link: "details.html",
    },
    {
      tag: "Nuevo",
      img: "images/ingresos/remeraIngreso.png",
      title: "Remera",
      subtitle: "Accesorio",
      price: "$15.000",
      discount: "$20.000",
      link: "details.html",
    },
    {
      tag: "Nuevo",
      img: "images/ingresos/t-shirt1.png",
      title: "Remera",
      subtitle: "Accesorio",
      price: "$14.99",
      discount: "$29.99",
      link: "details.html",
    },
    {
      tag: "Nuevo",
      img: "images/ingresos/t-shirt2.png",
      title: "Remera",
      subtitle: "Accesorio",
      price: "$15.500",
      discount: "$20.000",
      link: "details.html",
    },
    {
      tag: "Nuevo",
      img: "images/ingresos/t-shirt3.png",
      title: "Remera",
      subtitle: "Accesorio",
      price: "$18.500",
      discount: "$22.000",
      link: "details.html",
    },
    {
      tag: "Nuevo",
      img: "images/ingresos/t-shirt4.png",
      title: "Remera",
      subtitle: "Accesorio",
      price: "$16.500",
      discount: "$22.000",
      link: "details.html",
    },
  ];
  

  return (
    <section className="new section" id="newArrivals">
      <h2>Algunos Ingresos</h2>
      <div className="new__container container">
        <div className="new__cards">
          {newItems.map((item, index) => (
            <div className="new__content" key={index}>
              <div className="new__tag">{item.tag}</div>
              <div className="new__img-container">
                <img src={item.img} alt={item.title} className="new__img" />
              </div>
              <h3 className="new__title">{item.title}</h3>
              <span className="new__subtitle">{item.subtitle}</span>
              <div className="new__prices">
                <span>{item.price}</span>
                <span className="new__discount">{item.discount}</span>
              </div>
              <a href={item.link} className="button new__button">
                <HomeIcon className="h-6 w-6 text-gray-600" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;



