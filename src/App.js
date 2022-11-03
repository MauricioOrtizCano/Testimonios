import './App.css';
import logo_rebel from './imagenes/Logo_Rebel.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("");

  const addInput = value => {
    setInput(input + value)
  };

  const eraseInput = () => {
    setInput("");
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Please, add a value')
    }
  };


  return (
    <div className='App'>
      <div className='rebeldevelop_logo_container'>
        <img 
          className='rebeldevelop_logo'
          src={logo_rebel}
          alt='Logo RebelDevelop'
        />
        <div className='glass' />
      </div>
      <div className='calculator_container'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear borrarInput={eraseInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
