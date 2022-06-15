import React from 'react';
import './Main.css';
import iconoMano from '../../Materiales/icono-mano.png';
import iconoMas from '../../Materiales/icono-mas.png';
import manoCorazon from '../../Materiales/icono-mano-corazon.png';
import iconoReciclar from '../../Materiales/icono-reciclar.png'
import iconoMletin from '../../Materiales/icono-maletin.png'

const Main = () => {
    return (
        <main>
        <article id="nosotros">
            <div id="oficina"></div>
            <div id="soluciones_empresas">
                <h2 className="titulos_nosotros">Soluciones para empresas</h2>
                <p className="texto_nosotros">Generamos un medio para que las emrpesas se involucren en actividades de
                    responsabilidad social. <br/>
                    ¡Creá un grupo de voluntarios en tu organización y se parte del cambio!</p>
            </div>
            <div id="voluntariado"></div>
            <div id="soluciones_organizaciones">
                <h2 className="titulos_nosotros">Soluciones para organizaciones</h2>
                <p className="texto_nosotros">Apoyamos a las organizaciones sociales para que alcancen sus objetivos.
                    Ponemos a su disposición una
                    comunidad de voluntarios dispuestos a apoyarlas en sus necesidades. <br/>
                    Equipos de voluntarios por empresas dispuestos a potenciar tu impacto en la sociedad.</p>
            </div>
        </article>

        <article id="categorias">
            <div id="categorias_titulo">
                <h2>
                    <center> Encuentra las mejores oportunidades</center>
                </h2>
                <p>
                    <center>La plataforma cuenta con gran variedad de proyectos locales (sociales, educativos y
                        medioambientales),
                        donde encontraras el que mejor se adapte a la experiencia que estas buscando. <br/> Te ayudamos
                        en la
                        coordinación con la organización de forma simple y rápida.</center>
                </p>
            </div>

            <div>
                <ul id="lista_categorias">
                    <li id="voluntario">
                        <img className="icono_voluntario" src={iconoMano} alt="icono_mano"/>
                        <img className="icono_mas" src={iconoMas} alt="icono_mas"/>
                        <h3>Ser voluntario</h3>
                    </li>
                    <li id="donar">
                        <img className="icono" src={manoCorazon} alt="icono_mano_corazon"/>
                        <img className="icono_mas" src={iconoMas} alt="icono_mas"/>
                        <h3>Donar</h3>
                    </li>
                    <li id="reciclar">
                        <img className="icono_reciclar" src={iconoReciclar} alt="icono_reciclar"/>
                        <img className="icono_mas" src={iconoMas} alt="icono_mas"/>
                        <h3>Reciclar</h3>
                    </li>
                    <li id="llamados_laborales">
                        <img className="icono_maletin" src={iconoMletin} alt="icono_maletin"/>
                        <img className="icono_mas" src={iconoMas} alt="icono_mas"/>
                        <h3>Llamados laborales</h3>
                    </li>

                </ul>
            </div>

        </article>
    </main>
              
    )
}

export default Main