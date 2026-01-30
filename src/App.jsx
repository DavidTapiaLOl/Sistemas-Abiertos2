//import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Header from './Components/header'
import { useState,useEffect } from 'react'
import { db } from './db/db'




function App() {
  //variable y su metodo
const [customer, setCustomer] = useState({});  
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false);
console.log(total);
const [cart,setCart] = useState([]);

//()=>setTotal(100);
const [data,setData] = useState(db);
/* useEffect(()=>{ //para dar valores despues de cargar todo
  setData(db);
},[]); */
console.log(data);


  return (
    <>
    <Header cart={cart}/>
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
           {data.map((guitar) => (
            <Card
            key={guitar.id}
            guitar = {guitar}
            cart = {cart}
            setCart = {setCart}
            />
           ))}
        </div>
    </main>

<Footer/>

   
    </>
  )
}

export default App
