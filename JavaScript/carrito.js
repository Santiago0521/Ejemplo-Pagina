import React from 'react';
import ReactDOM from 'react-dom';

function Producto(props) {
  return (
    <div className="producto" id={props.id}>
      <img src={props.imgSrc} className="img-fluid" alt={props.nombre} width="400" height="400" />
      <h3>{props.nombre}</h3>
      <p>Precio: {props.precio}</p>
      <details>
        <div className="card card-body">
          <img src={props.imgSrc} className="img-fluid" alt={props.nombre} width="400" height="400" />
          <p>Descripción del producto...</p>
          <p>Tallas disponibles...</p>
          <p>Precio: {props.precio}</p>
          <a href="https://www.instagram.com/" target="_blank">
            <button>Comprar</button>
          </a>
        </div>
      </details>
    </div>
  );
}

class App extends React.Component {
  agregarAlCarrito() {
    // Lógica para agregar al carrito
  }

  render() {
    return (
      <div className="container">
        <h2>Nuestros Productos</h2>
        <div className="productos">
          <Producto
            id="producto-1"
            imgSrc="img/camiseta.jpg"
            nombre="Producto 1"
            precio="$20.00"
          />
          {[2, 3, 4, 5, 6].map(numeroProducto => (
            <div className="producto" key={`producto-${numeroProducto}`}>
              <img src={`producto${numeroProducto}.jpg`} alt={`Producto ${numeroProducto}`} />
              <h3>Producto {numeroProducto}</h3>
              <p>Precio: ${20 + 5 * (numeroProducto - 1)}.00</p>
              <button onClick={this.agregarAlCarrito}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
