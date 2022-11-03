import React from "react";
import '../style_sheets/BotonClear.css'

export default function BotonClear(props) {
    return (
        <button 
            className="boton-clear"
            onClick={() => props.borrarInput()}
        >
            {props.children}
        </button>
    )
}