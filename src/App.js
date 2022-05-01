import './App.css';
import FreecodecampLogo from './Imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import '../src/componentes/hojas-estilos/Boton.css'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {
  const [input, setInput] =useState('');

  const NuevoInput = valor =>{
    setInput(input + valor)
  }
  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }
    else{
      alert('Por favor ingrese un valor')
    }
   
  }


  return (
    <div className="App">
      <div className='Logo-contenedor'>
        <img
        src={FreecodecampLogo}
        alt='Logo de freecodecamp'
        className='freecodecamp-logo'
        />
      </div>
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClic={NuevoInput}>1</Boton>
        <Boton manejarClic={NuevoInput}>2</Boton>
        <Boton manejarClic={NuevoInput}>3</Boton>
        <Boton manejarClic={NuevoInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={NuevoInput}>4</Boton>
        <Boton manejarClic={NuevoInput}>5</Boton>
        <Boton manejarClic={NuevoInput}>6</Boton>
        <Boton manejarClic={NuevoInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={NuevoInput}>7</Boton>
        <Boton manejarClic={NuevoInput}>8</Boton>
        <Boton manejarClic={NuevoInput}>9</Boton>
        <Boton manejarClic={NuevoInput}>x</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={NuevoInput}>0</Boton>
        <Boton manejarClic={NuevoInput}>.</Boton>
        <Boton manejarClic={NuevoInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={()=> setInput('')}>Clear</BotonClear>
      </div>

      </div>
    </div>
  );
}

export default App;
