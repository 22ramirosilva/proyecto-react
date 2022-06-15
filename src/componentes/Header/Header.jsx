import React from 'react';
import './Header.css';
import background from '../../Materiales/manos.jpg';

const Header = () => {
    return (
        <header style={{backgroundImage: `url(${background})` }}>
        <div id="texto_header">
            <h1>
                <center>¡Actúa para cambiar el mundo!</center>
            </h1>
            <h3>
                <center>Fomentamos el vínculo entre empresas y organizaciones civiles para generar un impacto
                    positivo en la sociedad. <br/>
                    Descubrí diferentes maneras de involucrar tu organización con la sociedad.</center>
            </h3>
        </div>

    </header>        
    )
}

export default Header