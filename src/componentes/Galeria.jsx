import './Galeria.css';


function Galeria() {
  return(
    <div className="galeria">

      <div className='contenedor-slider'>
        <div class="slider">
          <img className='foto' src={require("../imagenes/bodega-1/1.jpg")} alt='1' />
          <img className='foto' src={require("../imagenes/bodega-1/2.jpg")} alt='2' />
          <img className='foto' src={require("../imagenes/bodega-1/3.jpg")} alt='3' />
          <img className='foto' src={require("../imagenes/bodega-1/4.jpg")} alt='4' />
          <img className='foto' src={require("../imagenes/bodega-1/5.jpg")} alt='5' />
        </div>
      </div>

      <div className='info-precio'>
        <div className='contenedor-precio'>
          <h6 className='titulo-precio'>Precio de venta</h6>
          <h5 className='valor-precio'>$3.500.000.000</h5>
        </div>
      </div>
    </div>
  )
}

export default Galeria