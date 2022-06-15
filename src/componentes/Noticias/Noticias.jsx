import React from 'react';
import './Noticias.css';
import iconoReloj from '../../Materiales/icono-reloj.png';
import iconoCalendario from '../../Materiales/icono-calendario.png';
import iconoFlecha from '../../Materiales/icono-flecha.png';

const Noticias = () => {
    return (
        <section id="noticias">
        <div id="seccion_noticias">
            <h1 id="titulo_noticias">Noticias</h1>
            <a class="ver_todas" href="">
                <p class="ver_todas">Ver todas</p>
            </a>
        </div>


        <div class="container_carrousel">
            <div class="carrousel">
                <div class="grande">
                    <div class="noticias">
                        <div class="noticia noticia_uno">
                            <div id="not_1"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_dos">
                            <div id="not_2"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_tres">
                            <div id="not_3"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_cuatro">
                            <div id="not_4"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="noticias">
                        <div class="noticia noticia_uno">
                            <div id="not_5"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_dos">
                            <div id="not_6"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_tres">
                            <div id="not_7"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_cuatro">
                            <div id="not_8"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="noticias">
                        <div class="noticia noticia_uno">
                            <div id="not_9"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_dos">
                            <div id="not_10"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_tres">
                            <div id="not_11"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>

                        <div class="noticia noticia_cuatro">
                            <div id="not_12"></div>
                            <div>
                                <div id="calendario_reloj">
                                    <div class="calendario_reloj">
                                        <img src={iconoCalendario} alt="calendario"/>
                                        <p>20/08/22</p>
                                    </div>
                                    <div class="calendario_reloj">
                                        <img src={iconoReloj} alt="reloj"/>
                                        <p>5 min</p>
                                    </div>
                                </div>
                                <h4 class="text_noticia">Lorem ipsum dolor.</h4>
                                <p class="text_noticia">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div id="ver_mas_noticia">
                                    <p>Ver mas</p>
                                    <img src={iconoFlecha} alt="flecha"/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <ul class="puntos">
                    <li class="punto activo"></li>
                    <li class="punto"></li>
                    <li class="punto"></li>
                </ul>
            </div>
        </div>


    </section>        
              
    )
}

export default Noticias
