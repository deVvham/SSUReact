import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./component/Header";
import MainArea from "./component/MainArea";
import Footer from "./component/Footer";


function App() {
  return ( 
    <div className="App">
      <Header />
      <MainArea />
      <Footer />
  </div>
  )
}

export default App
