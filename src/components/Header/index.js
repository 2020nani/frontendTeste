import React from 'react';

import {Container} from '../Header/styles'
export default function Header() {
  
  return (
    <Container>
     <input type="text" placeholder="firstname"/>
     <input type="text" placeholder="lastname"/>
     <input type="text" placeholder="participation"/>
     <button type="button">Send</button>
     <button type="button">Atualizar</button>
    </Container>
  );
}
