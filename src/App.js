import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import history from './services/history';


export default function App() {
  return (
   
      <Router history={history}>
        <Header/>
        <Routes />
      </Router>
    
  );
}
