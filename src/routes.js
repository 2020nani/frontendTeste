import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Modal from './components/Modal'
import ModalDelete from './components/ModalDelete'
export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/modal" component={Modal} />
      <Route path="/modaldelete" component={ModalDelete} />
    </Switch>
  );
}
