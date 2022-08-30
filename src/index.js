import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductContextProvider } from './Context/ProductContext';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <BrowserRouter>
      <CartProvider>
      <App />

      </CartProvider>
      </BrowserRouter>
      
    </ProductContextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

