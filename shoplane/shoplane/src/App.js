// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router';
import { useState } from 'react';
import React from 'react';
import All from './Components/All/All';
import Electronics from './Components/Electronics/Electronics';
import Jewellery from './Components/Jewellery/Jewellery'
import LoginPage from './Components/Navbar/LoginPage/LoginPage';
import SignupPage from './Components/Navbar/SignupPage/SignupPage'
import Cart from './Components/Navbar/Cart/Cart';
import HomePage from './Components/HomePage/HomePage';
import WomensClothing from './Components/WomensClothing/WomensClothing'
import MensClothing from './Components/MensClothing/MensClothing'
import Favourites from './Components/Navbar/Favourite/Favourite';


function App() {

  const [Favourite,setFavourite] = useState([]);
  const [cart,setCart] = useState([]);
  // const [heart, setHeart] = useState(false);
  
  function addToCart(params){
     
        if(cart.includes(params)){
          cart.splice(cart.indexOf(params),1)
        }else{
          cart.push(params)
        }
        
        setCart([...cart])
        console.log(cart)

  }
   
  function addToFavourite(params){
       
    if(Favourite.includes(params)){
      Favourite.splice(Favourite.indexOf(params),1)
    }else{
      Favourite.push(params)
    }
    setFavourite([...Favourite])
    console.log(Favourite)

    
}

  return (
    <>
    <HomePage count={cart.length}/>
    
  <Routes>

  <Route path="/" element={<All Favourite={Favourite} addToFavourite={addToFavourite} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/Electronics" element={<Electronics Favourite={Favourite} addToFavourite={addToFavourite} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/jewellery" element={<Jewellery Favourite={Favourite} addToFavourite={addToFavourite} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/Mensclothing" element={<MensClothing Favourite={Favourite} addToFavourite={addToFavourite} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/Womensclothing" element={<WomensClothing Favourite={Favourite} addToFavourite={addToFavourite} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/Cart" element={<Cart cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/favourite" element={<Favourites Favourite={Favourite} addToFavourite={addToFavourite} cart={cart} addToCart={addToCart}/>} ></Route>
   <Route path="/LoginPage" element={<LoginPage/>} ></Route>
   <Route path="/SignupPage" element={<SignupPage/>} ></Route>
   
</Routes>

    </>
  );
}


export default App;