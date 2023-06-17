import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BooksDataProvider } from './context/dataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BooksDataProvider>


      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BooksDataProvider>
  </React.StrictMode>
);


