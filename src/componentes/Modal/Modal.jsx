import React from 'react'
import './Modal.css'
import iconoFlecha from '../../Materiales/icono-flecha.png'

const Modal = ({ estaAbierto, funcionCierre }) => {


    return (
        <div id="myModal" style={{ display: estaAbierto ? "block" : "none" }} className="modal" >
            <div className="modal-content">
                <span className="close" onClick={funcionCierre}>&times;</span>
                <div id="modal-registrar">
                    <p onClick={funcionCierre}><img id="flechaleft" src={iconoFlecha} alt="flecha" /> volver atras</p>

                    <h3 className="modal-registrar">
                        <center><b>REGISTRAR</b></center>
                    </h3>

                    <div id="registro">

                        <div id="empresa">
                            <div id="icono-maletin"></div>
                            <div id="mi-empresa">
                                <h3 id="titulo-emp">MI EMPRESA</h3>
                                <p>Breve explicación a lo que nos referimos</p>
                                <img className="flechita" src={iconoFlecha} alt="flecha" />
                            </div>
                        </div>

                        <div id="organizacion">
                            <div id="icono-persona"></div>
                            <div id="mi-org">
                                <h3 id="titulo-org">MI ORGANIZACIÓN</h3>
                                <p>Estamos para ayudarlos a tener éxito</p>
                                <img className="flechita" src={iconoFlecha} alt="flecha" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="modal-img" /></div>
        </div>

    )
}
export default Modal








