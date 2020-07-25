import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Modal from './components/Modal';
import ModalDelete from './components/ModalDelete';
import ModalUpdate from './components/ModalUpdate'
export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/modal" component={Modal} />
      <Route path="/modaldelete" component={ModalDelete} />
      <Route path="/modalupdate" component={ModalUpdate} />
    </Switch>
  );
}
