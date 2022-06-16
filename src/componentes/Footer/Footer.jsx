import React from 'react';
import './Footer.css';
import laptopEscritorio from '../../Materiales/laptop-escritorio.jpg';
import logoBlanco from '../../Materiales/logo-blanco.png';


const Footer = () => {
    return (
        <footer>
        <div id="formulario">
            <div id="form_img">
                <img id="laptop" src={laptopEscritorio} alt="imagen_laptop"/>
            </div>
            <div id="form_contacto">
                <h1 id="contacto_color">
                    <center><b>Contacto</b></center>
                </h1>
                <form>
                    <div id="form">
                        <div>
                            <label for="name">Nombre:</label><br/>
                            <input type="text" id="name" name="name"/><br/>
                            <label for="email">Correo:</label><br/>
                            <input type="email" id="email" name="email"/><br/>
                        </div>

                        <div>
                            <label for="mensaje">Mensaje:</label> <br/>
                            <textarea name="mensaje" placeholder="Escribe tu mensaje aqui..." cols="30"
                                rows="4"></textarea>
                        </div>

                    </div>
                    <input id="btn_enviar" type="submit" value="ENVIAR"/>
                </form>

            </div>
        </div>


        <div id="footer">
            <a href="#body"><img id="logo_blanco" src={logoBlanco} alt="logo_blanco"/></a>
            <ul id="lista">
                <li><a className="link_footer" href="#nosotros">Nosotros</a></li>
                <li><a className="link_footer" href="#noticias">Noticias</a></li>
                <li><a className="link_footer" href="#form_contacto">Contacto</a></li>
                <li><a className="link_footer" href="#nosotros">Terminos y condiciones</a></li>
            </ul>
            <div id="redes">
                <p>Seguinos!</p>
            </div>
        </div>
    </footer>
              
    )
}

export default Footer