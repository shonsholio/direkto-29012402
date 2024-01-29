import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <div className='contenedor-header'>
        
        <div className='contenedor-logo'>
          <img
          className="logo;"
          src={require("../imagenes/logo-direkto.png")}
          alt="logo direkto" />
        </div>

        <h1 className='titulo'>{props.titulo}</h1>
        
      </div>
    </div>
  );
}
  
export default Header;
  