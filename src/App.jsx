// src/App.jsx
import './App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { useState,useEffect } from 'react'
import { db } from './db/db'

function App() {
const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);
  const [data] = useState(db);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //para aumentar cantidad
  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item;
    });
    setCart(updatedCart);
  }

  //para disminuir cantidad
  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item;
    });
    setCart(updatedCart);
  }

  // Función para eliminar producto 
  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  }

  // Función para vaciar todo el carrito
  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Header 
        cart={cart} 
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>
          <div className="row mt-5">
             {data.map((guitar) => (
              <Card
                key={guitar.id}
                guitar={guitar}
                cart={cart}
                setCart={setCart}
              />
             ))}
          </div>
      </main>
      <Footer/>
    </>
  )
}

export default App