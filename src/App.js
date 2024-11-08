import React from 'react';
import './App.css';
import Product from './components/products';
import Header from './components/header';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import store from './store/store';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <Cart/>
        <Product/>
      </div>
  </Provider>
  )
}

export default App
