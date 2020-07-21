import React from 'react';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Routes from './routes';

import history from './services/history';


export default function App() {
  return (
   
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    
  );
}
