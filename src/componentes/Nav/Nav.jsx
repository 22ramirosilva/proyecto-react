import React from 'react'
import './Nav.css'
import logoNav from '../../Materiales/logo.png'

const Nav = () => {
    return (
        <nav>
        <div id="logotipo">
            <a href="#body"><img id="logoimg" src={logoNav} alt="logo"/></a>
        </div>
        <ul id="lista_nav">
            <li><b><a className="link_nav" href="#nosotros">Nosotros</a></b></li>
            <li><b><a className="link_nav" href="#noticias">Noticias</a></b></li>
            <li><b><a className="link_nav" href="#body">Ayuda</a></b></li>
        </ul>

        <button id="btn_ingresar">INGRESAR</button>
    </nav>
    )
}

export default Nav