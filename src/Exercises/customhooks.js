// Custom hooks
/**
 * Hacer un hook que me permita manejar un booleano
 * Este hook tiene que devolverme el valor booleano
 * y una funcion que se llame toggleValue. La funcion
 * debe cambiar al estado contrario. El hook debe tomar
 * como parametro el primer valor que queremos para nuestro
 * booleano.
 * Tambien debera ser aplicado a dos componentes
 * 1. Un componente que, con un boton, me muestre una 
 * imagen o la oculte.
 * 2. Otro componente con un checkbox y un input de texto. 
 * El checkbox debe permitirme deshabilitar el input.
 */

import React, { useState } from 'react';
import './customhooks.css';
import Boton from '../img/boton.png'
import Boo from '../img/boo.jpg'
import CustomBolean from '../custombolean.js'
import useBolean from '../custombolean.js';


const CustomHooks = () => {
    const [value, toggleValue] = useBolean()
    return (
        <div className="container">
            <div>Tocalo y sorprendete</div>
            <img src={Boton} onClick={toggleValue} className="img-2"></img>
            {
                value ?
                    <img src={Boo} className="img-1"></img>
                    :
                    null
            }

        </div>
    )
}



export default CustomHooks;