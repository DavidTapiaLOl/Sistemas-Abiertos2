import React from "react";
import Item from "./Item";
export default function Header({ cart }) {
  //logica
  const cartTotal =()=> cart.reduce((total,item) => total + (item.price * item.quantity), 0);
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                class="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./public/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" class="bg-white p-3">
                {cart.length === 0 && (
                  <p className="text-center">El carrito está vacío</p>
                )}
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  {cart.map((item) => (
                    <Item key={item.id} cart={item} />
                  ))}
                </table>

                <p className="text-end">
                  Total pagar: <span class="fw-bold">${cartTotal}</span>
                </p>
                <button className="btn btn-dark w-100 mt-3 p-2">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
