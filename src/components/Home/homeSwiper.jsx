import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa Swiper y SwiperSlide de la librería Swiper
import 'swiper/css'; // Importa el archivo CSS básico de Swiper
import 'swiper/css/navigation'; // Importa el CSS para la navegación de Swiper (si se usa)
import 'swiper/css/pagination'; // Importa el CSS para la paginación de Swiper (si se usa)
import './homeSwiper.css'; // Importa el archivo de estilos personalizado para el Swiper

const HomeSwiper = () => {
  return (
    <div className="home-swiper-container">
      {/* Contenedor principal del Swiper */}
      <Swiper
        spaceBetween={0} // No hay espacio entre las diapositivas
        slidesPerView={1} // Muestra solo una diapositiva a la vez
        loop={true} // Habilita el bucle, es decir, el carrusel vuelve al inicio una vez que llega al final
        autoplay={{
          delay: 1000, // Configura el autoplay para que pase a la siguiente diapositiva cada 1000 ms (1 segundo)
        }}
      >
        {/* Primer Slide */}
        <SwiperSlide>
          <div className="home-swiper-slide">
            {/* Sección de imagen */}
            <div className="image-section">
              <img src="/images/short-menu.png" alt="Slide 1" /> {/* Imagen de la diapositiva */}
            </div>
            {/* Sección de contenido */}
            <div className="content-section">
              <h1>#1 EN OFERTAS</h1> {/* Título principal */}
              <h2>SALE 20% OFF EN SHORTS</h2> {/* Subtítulo */}
              <h3>Los shorts "Jurry" están fabricados con una mezcla premium de algodón orgánico y elastano. Material de alta calidad permite una gran durabilidad, transpirabilidad y libertad de movimiento, ideal tanto para actividades al aire libre como para el día a día.</h3>
              {/* Descripción breve del producto */}
              <button>Comprar</button> {/* Botón para realizar una acción */}
            </div>
          </div>
        </SwiperSlide>

        {/* Segundo Slide */}
        <SwiperSlide>
          <div className="home-swiper-slide">
            {/* Sección de imagen */}
            <div className="image-section">
              <img src="/images/remera-inicio.png" alt="Slide 2" /> {/* Imagen de la diapositiva */}
            </div>
            {/* Sección de contenido */}
            <div className="content-section">
              <h1>#2 EN TENDENCIAS</h1> {/* Título principal */}
              <h2>NUEVAS COLECCIONES</h2> {/* Subtítulo */}
              <h3>Descubre los productos más innovadores del año, cuidadosamente seleccionados para ofrecerte lo último en tendencias y tecnología. No te pierdas nuestras ofertas exclusivas.</h3>
              {/* Descripción breve */}
              <button>Explorar</button> {/* Botón para realizar una acción */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;




