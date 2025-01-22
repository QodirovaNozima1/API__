import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Product from './components/product/Product'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Product/>
      <Footer/>
    </>
  )
}

export default App
