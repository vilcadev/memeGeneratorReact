import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {


  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen,setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value);
  }
  const onChangeImagen = function(evento){
    setImagen(evento.target.value);
  }

  const onCLickExportar = function(evento){
    alert("EXPORTAR");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');//'a' hace referencia a la etiqueta a
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">
     {/* Select picker de memes */}
     <select onChange={onChangeImagen}>
     <option value="wazowski.jpg">Wasowski</option>
      <option value="girlScared.png">Anime Girl Scared</option>    
     </select> <br/>     
     {/* Input text - Primer Linea */}
    <input onChange={onChangeLinea1} type="text" placeholder='Linea Superior'/> <br/> 
     {/* Input text - Segunda Linea */}
     <input onChange={onChangeLinea2} type="text" placeholder='Linea Inferior'/> <br/>
     {/* Boton exportar */}
     <button onClick={onCLickExportar}>Exportar</button>

     <div className="meme" id="meme">
      <span>{linea1}</span><br/>
      <span>{linea2}</span>
      <img src={"/img/"+imagen}/>
     </div>
    </div>
  );
}

export default App;
