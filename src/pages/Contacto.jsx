import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Contacto = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // por si queremos hacer la logica de enviar el form 
        
    };

    return (
        <h2>Contacto</h2>,
        <section>
                <div>
                    <div>
                        <form id='contact-form' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="inputEmail">Correo electrónico:</label>
                                <br />
                                <input type="email" name="correo"  placeholder="Ingrese el correo en el que desea recibir su respuesta..."  />
                            </div>
                            <div> 
                                <label htmlFor="text">Asunto:</label>
                                <br />
                                <input type="text" name="asunto" placeholder="Ingrese una breve descripción de su mensaje..."/>
                            </div>
                            <div>
                                <label htmlFor="text">Mensaje:</label>
                                <br />
                                <input type="text" name="mensaje" placeholder="Ingrese su mensaje aquí..." />
                            </div>
                            <div>
                                <button type="submit" name="enviar">Enviar</button>
                            </div>
                        </form>
                    </div>

                    <img src={""} alt="Imágen de un perro con un telefono" />
                </div>
        </section>
    )
}

export default Contacto