import React from "react"
import Whatsapp from "../../images/whatsapp.png"
import Instagram from "../../images/instagram.png"
//import Site from "../../images/site.png"
import Profile from "../../images/profile.png"
//import Pix from "../../images/pix.png"
import Phone from "../../images/phone.png"


//import WhatsAppButton from "../WhatsAppButton"

export default function Content() {
  return (
    <>
      <div
        id="wrapper"
        className="container mb-2 animate__animated animate__fadeIn"
      >
        <div className="row">
          <div id="block-1" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box-1 box-content_primary_1  ">
              <div className="img-profile-center">
                <div id="main-box">
                  <img
                    className="img-profile"
                    src={Profile}
                    alt="Foto perfil"
                  />
                  <div className="container" style={{}}>
                    <h1
                      className="text-center"
                      style={{
                        letterSpacing: "-0.065625rem",
                        width: "100%",
                        fontSize: "2.5em",
                        lineHeight: "1.25",
                        color: "rgba(40,40,43,0.6)",
                        fontWeight: "200",
                      }}
                    >
                      Alcinir Pessanha
                    </h1>
                    <p
                      className="text-center"
                      style={{
                        letterSpacing: "-0.021875rem",
                        width: "100%",
                        fontSize: "0.8em",
                        lineHeight: 1.5,
                        color: "rgba(0, 0, 0, 0.4)",
                        fontWeight: "600",
                        textAlign: "justify",
                      }}
                    >
                      CRT: 1053/22
                    </p>
                    <p
                      className="text-center"
                      style={{
                        letterSpacing: "-0.021875rem",
                        width: "100%",
                        fontSize: "0.8em",
                        lineHeight: 1.5,
                        color: "#5C5C5C",
                        fontWeight: "600",
                        textAlign: "",
                        opacity: "0.8",
                      }}
                    >
                      Conselheiro em dependência química
                      <br /> 9° período de psicologia.
                      <br /> Atendimento online e presencial
                    </p>
                    <hr className="solid"></hr>
                  </div>

                  <div className="social-icons">
                    <a
                      className="btn btn-services mb-1"
                      href="https://api.whatsapp.com/send?phone=5521995501309&text=Olá gostaria de informações sobre consultas..."
                      target="_blank"
                      title="WhatsApp"
                      alt="WhatsApp"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Whatsapp}
                        style={{ marginRight: "" }}
                        width="32"
                        height="32"
                      />
                      <span className="animate__animated animate__heartBeat">
                        Marcação de consulta
                      </span>
                    </a>
                    <a
                      className="btn btn-services mb-1"
                      href="21995501309"
                      target="_blank"
                      title="Telefone"
                      alt="Telefone"
                    >
                      <img 
                        className="animate__animated animate__heartBeat"
                        src={Phone}
                        style={{ opacity:'0.5' }}
                        width="28"
                        height="28"
                       
                      />
                      <span className="">Ligar</span>
                    </a>
                    <a
                      className="btn btn-services mb-1"
                      href="https://www.instagram.com/alcinir_terapeuta/"
                      target="_blank"
                      title="Instagram"
                      alt="Instagram"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Instagram}
                        style={{ marginRight: "" }}
                        width="32"
                        height="32"
                      />
                      <span className="">Instagram</span>
                    </a>

                    {/* <a
                      className="btn btn-services mb-1"
                      href="https://ocariocaweb.gatsbyjs.io/"
                      target="_blank"
                      title="Site"
                      alt="Site"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Site}
                        style={{ marginRight: "" }}
                        width="32"
                        height="32"
                      />
                      <span className="">Website</span>
                    </a>

                    <a
                      className="btn btn-services mb-1"
                      href="https://nubank.com.br/pagar/15ajnc/muKBO0sUBV"
                      target="_blank"
                    >
                      <img
                        className="animate__animated animate__heartBeat"
                        src={Pix}
                        style={{ marginRight: "" }}
                        width="42"
                      />

                      <span className="">Pagamento</span>
                    </a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
