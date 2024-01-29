import './Detalles.css';

function Detalles() {
  return(
    <div className="detalles">
      <div>
        <br />
        <h4 className='ttl-detalles'>Detalle del Inmueble</h4>
        <hr />
      </div>  

      <div className='contenedor-detalles'>
        <div className='contenedor-lista'>
          <ul className='lista-detalles'> 
            <li>Tipo de inmueble:  Bodega</li>
            <li>Ubicación:  Barranquilla</li>
            <li>Area:  2062 m2</li>
            <li>Ubicada en Parque Industrial</li>
            <li>Puerto de aguas profundas (6 km)</li>
            <li>Zona Franca Sofia (11 km)</li>
            <li>Via Cartagena (9.4 km)</li>
            <li>Aeropuerto Ernesto Cortizos (19km)</li>
            <li>Zona portuaria (13 km)</li>
            <li>Via Santa Marta (8 km)</li>

          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Detalles