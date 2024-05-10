
import React from 'react';
import { Blog,Features,Footer,Header,Possibility,WhatGPT8 } from './containers';
import { Navbar,Cta,Brand } from './components';
import './App.css'


const App = () => {
  return (
    
      <div className="App">
         <div className="gradient__bg">
            <Navbar />
            <Header />
         </div>
          <Brand />
          <WhatGPT8 />
          <Features />
          <Possibility />
          <Cta />
          <Blog />
          <Footer />
      </div>
   
  )
}

export default App
