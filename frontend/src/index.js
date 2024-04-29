import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/Login';

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<Login />}/>
        <Route  exact path="/articles" element={<App />}/>
        
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


reportWebVitals();
