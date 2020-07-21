import React from 'react';

import {Container} from '../Header/styles'
export default function Header() {
  
  return (
    <Container>
      
     <form action="">
     <input type="text" placeholder="firstname"/>
     <input type="text" placeholder="lastname"/>
     <input type="text" placeholder="participation"/>
     <button type="button">Send</button>
     
     </form>
     
    </Container>
  );
}
