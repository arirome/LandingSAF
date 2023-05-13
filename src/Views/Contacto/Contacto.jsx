import React, { useState, useRef, useEffect } from "react";
import { AlertaModal } from "../../Components/Layout/ModalAlerta";
import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import NavbarColor from "../../Components/Layout/NavbarColor";
const Contacto = () => {
  const [textoNombre, setTextoNombre] = useState();
  const [textoCorreo, setTextoCorreo] = useState();
  const [textoMensaje, setTextoMensaje] = useState();

  const cambiarTexto = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") {
      setTextoNombre(value);
    } else if (name === "correo") {
      setTextoCorreo(value);
    } else if (name === "mensaje") {
      setTextoMensaje(value);
    }
  };

  const enviarConsulta = () => {
    AlertaModal({
      tituloModal: "Su Consulta fue enviada correctamente",
      tipoModal: "success",
      colorModal: "#7cd164",
      tiempoModal: 2000,
    });
  };

  return (
    <React.Fragment>
      <NavbarColor />
      <br></br>
      <br></br>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  Consultas
                </h5>
                <h1 className="mb-0">
                  Para comunicarte con la Subsecretaría de Defensa al Consumidor
                  complete el siguiente formulario.
                </h1>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn"
                data-wow-delay="0.9s"
              >
                <form>
                  <div className="row g-3">
                    <div className="col-xl-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Tú Nombre"
                        name="nombre"
                        onChange={(e) => {
                          cambiarTexto(e);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Tú Correo Electronico"
                        name="correo"
                        onChange={(e) => {
                          cambiarTexto(e);
                        }}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0"
                        rows="3"
                        name="mensaje"
                        placeholder="Mensaje"
                        onChange={(e) => {
                          cambiarTexto(e);
                        }}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      {textoCorreo && textoMensaje && textoNombre ? (
                        <Link to="/">
                          <button
                            className="btn btn-dark w-100 py-3"
                            type="button"
                            onClick={() => {
                              enviarConsulta();
                            }}
                          >
                            Enviar Consulta
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn btn-dark w-100 py-3"
                          type="button"
                          disabled
                          onClick={() => {
                            enviarConsulta();
                          }}
                        >
                          Enviar Consulta
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contacto;
