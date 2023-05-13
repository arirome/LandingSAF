import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Components/Layout/Footer";
import img from "../../Components/Assets/Imgs/informativo/semana santa.webp";
import pastelisto from "../../Components/Assets/Imgs/informativo/Pastelito.webp";
import productos1 from "../../Components/Assets/Imgs/informativo/prucdS.webp";
import productos2 from "../../Components/Assets/Imgs/informativo/prucdS1.webp";
import productos3 from "../../Components/Assets/Imgs/informativo/prucdS2.webp";
import batata from "../../Components/Assets/Imgs/informativo/batata-casero.webp";
import gas from "../../Components/Assets/Imgs/informativo/GAS.webp";
import ssanta from "../../Components/Assets/Imgs/informativo/semana santa2.webp";
import chivitopaipa from "../../Components/Assets/Imgs/informativo/chivito casero.webp";
import NavbarColor from "../../Components/Layout/NavbarColor";
import AOS from 'aos';
import 'aos/dist/aos.css';
//import '../LandingPage/Landing.css'
import './informativo.css'


const Informativo = () => {


  const noticias = [
    {
      fecha: "20/04/2023",
      titulo: "LOS PASTELITOS CAMPEONES HERRADUREÑOS ",
      cuerpo:
        "Por segundo vez los campeones de LA FIESTA DEL PASTELITO HERRADUREÑO 2023 nos visitan en el punto fijo de Av. Nestor Kirchner 1.855 B° San Pedro el sabado 22/04/2023.  ",
      imgs: [pastelisto],
    },
    {
      fecha: "13/04/2023",
      titulo: "PRODUCTOS ''NETAMENTE FORMOSEÑOS'' ",
      cuerpo:
        "NUEVO PRODUCTO  con carne de chivito paippero formoseño, producidos en la planta de alimentos de ''Los Nenecos'' en el barrio Simón Bolívar. Desde el dia viernes 14/04 ya se estara comerzializando  ",
      imgs: [chivitopaipa],
    },
    {
      fecha: "03/04/2023",
      titulo: "Todos los productos para SEMANA SANTA ",
      cuerpo:
        "En esta ocacion el programa soberania alimentaria se relizara el dia miercoles 05/04 en los 4 puntos fijos dentro de la ciudad capital. Estos son algunos de los productos con los que contaremos esta semana",
      imgs: [productos1, productos2, productos3],
    },
    {
      fecha: "03/04/2023",
      titulo: "Chivito Formoseño PAIPPERO ",
      cuerpo:
        "Para este especial semana santa contamos con chivito en los 4 puntos puntos fijos del programa Soberania Alimentaria Formoseña.",
      imgs: [ssanta],
    },
    {
      fecha: "03/04/2023",
      titulo: "Refsa GAS ",
      cuerpo:
        "Solo contaremos con el tubo de gas en el punto de ''Av. Frondizi 4.205 B° Virgen del Rosario'' este contara con el precio de $1500.",
      imgs: [gas],
    },
    {
      fecha: "03/04/2023",
      titulo: "Dulce de Batata ''Del Carmen'' ",
      cuerpo:
        "A partir del miércoles sumamos al esquema de comercializacion el Dulce de Batata ''Del Carmen'' de Proveeduría Integral Formosa. Este contara con el precio de $300 los 500g.",
      imgs: [batata],
    },

    /*   {
      fecha: "01/04/2023",
      titulo: "Acuerdo de Precios para Semana Santa ",
      cuerpo:
        "Con la presencia del Vicegobernador Dr. Eber Solis, el Ministro de Economía Dr. Jorge Ibañez y el Subsecretario de Defensa al Consumidor y usuario, además de funcionarios del estado y representantes de comercios locales se firmó el Acuerdo de Precios de Semana Santa.",
      imgs: [img],
    }, */
  ];
  const [isModalOpen, setIsModalOpen] = useState(false); // estado para controlar si el modal está abierto o cerrado
  const [imagen, setImagen] = useState("");
  const handleImageClick = (img) => {
    setIsModalOpen(true);
    setImagen(img);
  };

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleMouseOver = () => {
    setMostrarMensaje(true);
  };

  const handleMouseLeave = () => {
    setMostrarMensaje(false);
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>
      <NavbarColor />
     
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">

    



          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <br></br>
           
           <svg height="100" stroke="#091E3E" stroke-width="2" class="text-line" width="100%">
            <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">Últimas Noticias!</text>
            
            </svg>
           
          </div>
         
          <div
            className="container-fluid py-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {noticias.map((noticia, index) => (
              <>
                <div className="style container py-5 border border-primary"  data-aos="fade-right"
  data-aos-duration="1000" key={index}>
                  <div className="row g-5">

               




                    <div className="col-lg-7">

                  

                      <div className="section-title position-relative pb-3 mb-5">
                        
                      <h5 className="fw-bold text-primary text-uppercase">
                                                  {noticia.fecha}
                                                </h5>
                     
                            <h1 className="mb-0">{noticia.titulo}</h1>
                           
                                                
                                                
                      
                       
                      </div>

                      
                            <p className="rounded-bg" style={{ color: "#091e3e", fontSize:"20px" }}>
                                                {noticia.cuerpo}
                                              </p>
                          
                                                
                       


                      
                    </div>

                    {noticia.imgs.length === 1 ? (
                      <div
                        className="col-lg-5"
                        style={{ display: "flex", alignItems: "center" }}
                      >


                        <img
                          className="d-block w-100"
                          src={noticia.imgs}
                          alt={`Imagen`}
                          style={{
                            borderRadius: "5px",
                            height: "300px",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            handleImageClick(noticia.imgs);
                          }} // agrega el evento de clic a la imagen
                        />
                      </div>
                    ) : (
                      <div
                        id="header-carousel"
                        className="col-lg-5 carousel slide carousel-fade"
                        /* style={{ display: "flex", alignItems: "center" }} */
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img
                              className="d-block w-100"
                              src={noticia.imgs[0]}
                              alt={`Imagen`}
                              style={{
                                borderRadius: "5px",
                                height: "300px",
                                objectFit: "cover",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleImageClick(noticia.imgs[0]);
                              }} // agrega el evento de clic a la imagen
                            />
                          </div>

                          {noticia.imgs.slice(1).map((imagen, index) => (
                            <div class="carousel-item">
                              <img
                                key={index}
                                className="d-block w-100"
                                src={imagen}
                                alt={`Imagen`}
                                style={{
                                  borderRadius: "5px",
                                  height: "300px",
                                  objectFit: "cover",
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  handleImageClick(imagen);
                                }} // agrega el evento de clic a la imagen
                              />
                            </div>
                          ))}
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide="prev"
                          >
                            <span
                              style={{
                                backgroundColor: "#454545",
                                borderRadius: "5px",
                              }}
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Anterior</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#header-carousel"
                            data-bs-slide="next"
                          >
                            <span
                              style={{
                                backgroundColor: "#454545",
                                borderRadius: "5px",
                              }}
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Siguiente</span>
                          </button>
                        </div>
                      </div>
                    )}
                    
                  </div>
                </div>

                <hr style={{ backgroundColor: "#d80caf", height: "4px" }}></hr>
              </>
            ))}
            {isModalOpen && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 999,
                }}
                onClick={() => setIsModalOpen(false)} // establece el estado del modal como cerrado al hacer clic fuera del modal
              >
                <img
                  src={imagen}
                  alt={`Imagen`}
                  style={{ maxHeight: "90vh", maxWidth: "90vw" }} // establece el tamaño máximo de la imagen dentro del modal
                />
              </div>
            )}{" "}
            <button
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              id="btn-up"
              style={{
                display: isVisible ? "block" : "none",
                position: "fixed",
                bottom: "20px",
                borderRadius:"20px",
                right: "20px",
              }}
              className="btn btn-primary float-right"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <FontAwesomeIcon icon={faArrowUp} />
              {mostrarMensaje && <div>Click para ir hacia arriba</div>}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Informativo;
