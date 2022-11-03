import React from "react";
import '../style_sheets/Boton.css';

export default function Boton(props) {

    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };

    return (
        <div 
            className={`button-container ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClick(props.children)}
        >
            {props.children}
        </div>
    )
}