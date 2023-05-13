import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import icono from "../../Components/Assets/Imgs/Mapa/ubi3.webp";
import icono2 from "../../Components/Assets/Imgs/Mapa/ubi3_sombra.webp";
import Fentre from "../../Components/Assets/Imgs/Mapa/frente-punto.webp";
import Fentre2 from "../../Components/Assets/Imgs/Mapa/local2.webp";
import Fentre3 from "../../Components/Assets/Imgs/Mapa/frente-punto2.webp";
import Fentre4 from "../../Components/Assets/Imgs/Mapa/frente-punto3.webp";
import LogoPunto from "../../Components/Assets/Imgs/Saf/favicon-02a8a1d2.webp";
import "./Mapa.css";
import "./punto.css";

import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import NavbarColor from "../../Components/Layout/NavbarColor";
import Footer from "../../Components/Layout/Footer";

const Puntos = () => {
  const iconoUbi = L.icon({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

  const iconoPersonalizado = L.icon({
    iconUrl: icono,
    shadowUrl: icono2, // ruta de la imagen del icono
    iconSize: [52, 52], // tamaño del icono
    shadowSize: [52, 52], // tamaño de la sombra
    iconAnchor: [16, 16], // posición del ancla del icono
    shadowAnchor: [16, 16], // posición del ancla de la sombra
  });

  const PopupContent = () => (
    <div>
      <h2 style={{ textAlign: "center" }}>Punto Fijo</h2>
      <p style={{ textAlign: "center" }}>Av. Arturo Frondizi (4205)</p>
      <p style={{ textAlign: "center" }}>
        Unicamente los Jueves y Sabados de 7:30hs a 12:30hs
      </p>
      <img src={Fentre3} alt="Imagen del lugar" style={{ maxWidth: "300px" }} />
    </div>
  );

  const PopupContent2 = () => (
    <div>
      <h2 style={{ textAlign: "center" }}>Punto Fijo</h2>
      <p style={{ textAlign: "center" }}>Av. Dr Nestor Kirchner (5595)</p>
      <p style={{ textAlign: "center" }}>
        Unicamente los Jueves y Sabados de 7:30hs a 12:30hs
      </p>
      <img src={Fentre2} alt="Imagen del lugar" style={{ maxWidth: "300px" }} />
    </div>
  );

  const PopupContent3 = () => (
    <div>
      <h2 style={{ textAlign: "center" }}>Punto Fijo</h2>
      <p style={{ textAlign: "center" }}>Av. Nestor Kirchner (1855)</p>
      <p style={{ textAlign: "center" }}>
        Unicamente los Jueves y Sabados de 7:30hs a 12:30hs
      </p>
      <img src={Fentre} alt="Imagen del lugar" style={{ maxWidth: "300px" }} />
    </div>
  );
  const PopupContent4 = () => (
    <div>
      <h2 style={{ textAlign: "center" }}>Punto Fijo</h2>
      <p style={{ textAlign: "center" }}>Paula Albarracín (2735)</p>
      <p style={{ textAlign: "center" }}>
        Unicamente los Jueves y Sabados de 7:30hs a 12:30hs
      </p>
      <img src={Fentre4} alt="Imagen del lugar" style={{ maxWidth: "300px" }} />
    </div>
  );
  const PopupContent5 = () => (
    <div>
      <h2 style={{ textAlign: "center" }}>Punto Viernes</h2>
      <p style={{ textAlign: "center" }}>B° Porvenir</p>
      <p style={{ textAlign: "center" }}>
        Unicamente los viernes en distintos Barrios de 7:30hs a 12:30hs
      </p>
      <img
        src={LogoPunto}
        alt="Imagen del lugar"
        style={{ maxWidth: "300px" }}
      />
    </div>
  );
  const PopupContent6 = () => (
    <div>
      <h2 style={{ textAlign: "center" }}>Punto Miercoles</h2>
      <p style={{ textAlign: "center" }}>Localidad de el Colorado</p>
      <p style={{ textAlign: "center" }}>
        Unicamente el dia miercoles 19/04 de 7:30hs a 12:30hs
      </p>
      <img
        src={LogoPunto}
        alt="Imagen del lugar"
        style={{ maxWidth: "300px" }}
      />
    </div>
  );

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [myLocation, setMyLocation] = useState([0, 0]);

  const [center, setCenter] = useState({
    lat: "-26.18064675300086",
    lng: "-58.188628961794805",
  });

  const mapRef = useRef();
  //ubicacion usuario
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMyLocation([latitude, longitude]);
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );
  }, []);
  //cronograma

  const [mostrarCronograma, setMostrarCronograma] = useState(true);

  const enableCronograma = () => {
    setMostrarCronograma(!mostrarCronograma);
  };
  //boton ir arriba
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







  return (
    <>
      <div className="container">
        <NavbarColor />
        <br></br>
        <br></br>
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <h5 className="fw-bold text-primary text-uppercase">MAPA</h5>

              {/*  <h1 className="mb-0">Todos Los Puntos Fijos</h1> */}

              <svg
                height="100"
                stroke="#091e3e"
                stroke-width="2"
                class="text-line"
                width="100%"
              >
                <text
                  x="50%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  y="50%"
                >
                  Puntos Fijos  
                </text>
              </svg>
            </div>
            <div className=" text-center position-relative pb-3 mb-5 mx-auto">
              {mostrarCronograma ? (
                <>
                
                    
                 
                  <br></br>
                  <br></br>

{/* ///////////////////////////////////////////////////////////////////////////////// */}

<h3>
                      <strong>¡Cronograma Semanal!</strong>
                    </h3>

<main class="page-content">
 
  <div class="card">
    <div class="content">
 
      <h2 class="title">MIERCOLES 19/04/2023</h2>
      <h6>
      <p class="copy">📌El Colorado - Por la calle Buenos Aires</p>
      </h6>
    </div>
  </div>

 
  <div class="card">
 
    <div class="content">
    
      <h2 class="title">JUEVES 20/04/2023</h2>
      <h6>
      <p class="copy1"> 📌Av. Frondizi 4.205 B° Virgen del Rosario
    <br/>
    <br/>
    📌Av. Nestor Kirchner 1.855 B° San Pedro
    <br/>
    <br/>
    📌Av. Nestor Kirchner 5.595 B° 12 de Octubre
    <br/>
    <br/>
    📌 Paula Albarracín 2735 B° Simón Bolivar
    </p>

      </h6>
    </div>
  </div>
  <div class="card">
    <div class="content">
      
    <h2 class="title">VIERNES 19/04/2023</h2>
      <h6>
      <p class="copy">📌B° El Porvenir</p>
      </h6>
    </div>
  </div>
 
  <div class="card">
 
  <div class="content">
    
    <h2 class="title">SÁBADO 20/04/2023</h2>
    <h6>
    <p class="copy1"> 📌Av. Frondizi 4.205 B° Virgen del Rosario
    <br/>
    <br/>
    📌Av. Nestor Kirchner 1.855 B° San Pedro
    <br/>
    <br/>
    📌Av. Nestor Kirchner 5.595 B° 12 de Octubre
    <br/>
    <br/>
    📌 Paula Albarracín 2735 B° Simón Bolivar
    </p>
 

    </h6>
  </div>
  </div>
</main>

<button
                    onClick={() => {
                      enableCronograma();
                    }}
                    style={{borderRadius:"15px", justifyContent:"flex-end", position:"relative"}}
                    className="btn btn-danger"
                  >
                  <i class="fa fa-eye-slash" style={{padding:"5px"}}></i> Ocultar Cronograma
                  </button>
     
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      enableCronograma();
                    }}
                    className="btn btn-success"
                    style={{borderRadius:"15px"}}
                  >
                   <i class="fa fa-eye" style={{padding:"5px"}}></i> Mostrar Cronograma
                  </button>
                </>
              )}
            </div>
          </div>

          <div id="services" class="services section">
            <div class="col-lg-12">
              <ul class="nacc">
                <li class="active">
                  <div>
                    <div class="thumb">
                      <div class="row">
                        <MapContainer
                          center={center}
                          zoom={12}
                          ref={mapRef}
                          style={{ width, height: height - 50 }}
                        >
                          <FeatureGroup>
                            <Marker
                              icon={iconoPersonalizado}
                              position={{
                                lat: "-26.139734",
                                lng: "-58.155675",
                              }}
                            >
                              <Popup>
                                <PopupContent4 />
                              </Popup>
                            </Marker>

                            <Marker
                              icon={iconoPersonalizado}
                              position={{
                                lat: "-26.180058876227015",
                                lng: "-58.188880131680094",
                              }}
                            >
                              <Popup>
                                <PopupContent3 />
                              </Popup>
                            </Marker>

                            <Marker
                              icon={iconoPersonalizado}
                              position={{
                                lat: "-26.204873480322004",
                                lng: "-58.20604169386524",
                              }}
                            >
                              <Popup>
                                <PopupContent />
                              </Popup>
                            </Marker>

                            <Marker
                              icon={iconoPersonalizado}
                              position={{
                                lat: "-26.13967450617694",
                                lng: "-58.17754664540953",
                              }}
                            >
                              <Popup>
                                <PopupContent5 />
                              </Popup>
                            </Marker>
                            <Marker
                              icon={iconoPersonalizado}
                              position={{
                                lat: "-26.192287685773195",
                                lng: "-58.226972147021996",
                              }}
                            >
                              <Popup>
                                <PopupContent2 />
                              </Popup>
                            </Marker>
                            <Marker
                              icon={iconoPersonalizado}
                              position={{
                                lat: "-26.309723200742024",
                                lng: "-59.37303765690761",
                              }}
                            >
                              <Popup>
                                <PopupContent6 />
                              </Popup>
                            </Marker>
                          </FeatureGroup>
                          <Marker icon={iconoUbi} position={myLocation}>
                            <Popup>Esta es tu ubicacion actual</Popup>
                          </Marker>
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />
                        </MapContainer>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          id="btn-up"
          style={{
            display: isVisible ? "block" : "none",
            position: "fixed",
            bottom: "20px",
            borderRadius: "20px",
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
      <Footer />
    </>
  );
};

export default Puntos;
