import imagen0 from './imagenes/imagen1.jpg';
import imagen1 from './imagenes/imagen2.jpeg';
import imagen2 from './imagenes/imagen3.jpeg';
import imagen3 from './imagenes/imagen4.jpeg';
import './miCss.css';

function App() {
  const nombres = ["Arroz Amarillo","Cerdo Asado", "Chicharrones", "Congris"];
  return (
    <div className="App">
      <h1>"Comida Favorita"</h1>
      <div className="contenedor-general">
        <div className='contenedor-primario'>
        <img 
          src={imagen0}
          alt='imagen0'
        /> <br />
        <p>{nombres[0]}</p>
        </div> 
        <div className='contenedor-primario'>
        <img 
          src={imagen1}
          alt='imagen1'
        /> <br />
        <p>{nombres[1]}</p>
        </div> 
        <div className='contenedor-primario'>
        <img 
          src={imagen2}
          alt='imagen2'
        /> <br />
        <p>{nombres[2]}</p>
        </div> 
        <div className='contenedor-primario'>
        <img 
          src={imagen3}
          alt='imagen3'
        /> <br />
        <p>{nombres[3]}</p>
        </div> 
      </div>
    </div>
  );
}

export default App;
