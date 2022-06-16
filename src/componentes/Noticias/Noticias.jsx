import React from 'react';
import './Noticias.css';
import iconoReloj from '../../Materiales/icono-reloj.png';
import iconoCalendario from '../../Materiales/icono-calendario.png';
import iconoFlecha from '../../Materiales/icono-flecha.png';

const Noticias = () => {

    const grande = document.querySelector('.grande');
    const punto = document.querySelectorAll('.punto');

    punto.forEach((cadaPunto, i) => {
        punto[i].addEventListener('click', () => {

            let posicion = i
            let operacion = posicion * -(100 / 3)

            grande.style.transform = `translateX(${operacion}%)`

            punto.forEach((cadaPunto, i) => {
                punto[i].classList.remove('activo')
            });
            punto[i].classList.add('activo')
        });
    });

    return (
        <section id="noticias">
            <div id="seccion_noticias">
                <h1 id="titulo_noticias">Noticias</h1>
                <a className="ver_todas" href="#noticias">
                    <p className="ver_todas">Ver todas</p>
                </a>
            </div>


            <div className="container_carrousel">
                <div className="carrousel">
                    <div className="grande">
                        <div className="noticias">
                            <div className="noticia noticia_uno">
                                <div id="not_1"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_dos">
                                <div id="not_2"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_tres">
                                <div id="not_3"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_cuatro">
                                <div id="not_4"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="noticias">
                            <div className="noticia noticia_uno">
                                <div id="not_5"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_dos">
                                <div id="not_6"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_tres">
                                <div id="not_7"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_cuatro">
                                <div id="not_8"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="noticias">
                            <div className="noticia noticia_uno">
                                <div id="not_9"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_dos">
                                <div id="not_10"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_tres">
                                <div id="not_11"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="noticia noticia_cuatro">
                                <div id="not_12"></div>
                                <div>
                                    <div id="calendario_reloj">
                                        <div className="calendario_reloj">
                                            <img src={iconoCalendario} alt="calendario" />
                                            <p>20/08/22</p>
                                        </div>
                                        <div className="calendario_reloj">
                                            <img src={iconoReloj} alt="reloj" />
                                            <p>5 min</p>
                                        </div>
                                    </div>
                                    <h4 className="text_noticia">Lorem ipsum dolor.</h4>
                                    <p className="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                    <div id="ver_mas_noticia">
                                        <p>Ver mas</p>
                                        <img src={iconoFlecha} alt="flecha" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <ul className="puntos">
                        <li className="punto activo"></li>
                        <li className="punto"></li>
                        <li className="punto"></li>
                    </ul>
                </div>
            </div>


        </section>

    )
}

export default Noticias
