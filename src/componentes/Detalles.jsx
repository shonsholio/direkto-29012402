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
            <li>Area:  2200 m2</li>
            <li>Ubicado sobre vía principal</li>
            <li>Circuito cerrado de TV</li>
            <li>2 puertas de acceso</li>
            <li>Amplia zona de oficinas</li>
            <li>Rampa de acceso a Nivel</li>
            <li>Zona de parqueo</li>
            <li>10 mts de altura mínima</li>
            <li>Amplia zona de oficinas con baños</li>
            <li>Baño en zona de bodega</li>
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Detalles