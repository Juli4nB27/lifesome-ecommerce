import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import NavBar from './Components/navbar/NavBar';
import Product from './Components/productView/ProductView';
import Information from './Components/informationView/InformationView';




function App() {
    return (
      <div className="App">
        <NavBar />
        <div className='main'>
          <Header />
          <Product/>
          <Information/>
        </div>
        <Footer />
      </div>
    );
  }
  
export default App;
