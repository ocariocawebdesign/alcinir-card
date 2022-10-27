import React from "react";
import Whatsapp from "../../images/whatsapp.png";
import Instagram from "../../images/instagram.png";
import Site from "../../images/site.png";
import Profile from "../../images/profile.png";

export default function Content() {
  return (
    <>
      <div id="wrapper" className="container mt-4">
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
                        fontSize: "1em",
                        lineHeight: 1.5,
                        color: "rgba(0, 0, 0, 0.4)",
                        fontWeight: "400",
                      }}
                    >
                      Conselheiro em dependência química
                      <br /> 9° período de psicologia <br />
                      Atendimento online e presencial
                    </p>
                  </div>
                  <div className="social-icons">
                    <img src={Whatsapp} style={{ marginRight: "0.8rem" }} />
                    <img src={Instagram} style={{ marginRight: "0.8rem" }} />
                    <img src={Site} style={{ marginRight: "" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
