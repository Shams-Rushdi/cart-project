import { useState } from 'react'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Products from './components/Products';

function App() 
{
  return (
    <div>
      {/* <HomePage/>            */}
      <ProductPage/>   
      {/* <CartPage/>            */}
    </div>
  )
}

export default App;
