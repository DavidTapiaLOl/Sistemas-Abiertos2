import React from "react";

export default function Card({ guitar, cart, setCart }) {
  const { price, name, image, description } = guitar;
  const handleClick = (item) => {
    const existeEnCarrito = cart.find((g) => g.id === item.id);
    if (existeEnCarrito) {
      const carritoActualizado = cart.map((g) => {
        if (g.id === item.id) {
          return { ...g, quantity: g.quantity + 1 };
        }
        return g;
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
/* 
  function addToCart(item){
    const itemExist = cart.finIndex(guitar => guitar.id === item.id);
    //sin duplicardos
    if(itemExist>=o){
        //aumentar el valor de cantidad
        const updateCart = [...cart]
        updateCart[itemExist].quantity++;
        setCart(updateCart);
    }else{
        //creando quantity
        item.quantity = 1
        setCart([...cart,item])
    }
    return addToCart
  } */

  return (
    <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
          <img className="img-fluid" src={image} alt="imagen guitarra" />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>{description}</p>
          <p className="fw-black text-primary fs-3">${price}</p>
          <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => handleClick(guitar)} //En caso de usar parametros debemos de hacerlo con una funcion flecha
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
}
