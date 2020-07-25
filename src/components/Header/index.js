import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from '../Header/styles';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstname: Yup.string()
    .required('Firstname e obrigatorio'),
  lastname: Yup.string()
    .required('Lastname e obrigatorio'),
  participation: Yup.number()
    .required('participation e obrigatorio'),
})
export default function Header() {
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [participation, setParticipation] = useState()

  function handleSubmite(event) {
   
    const response =  api.post('dados' , {
      firstname,
      lastname,
      participation
     }) 
    
  }

  return (

    <Container>

<form  onSubmit={handleSubmite} schema={schema}>
          <input name="firstname" type="text" placeholder="firstname" onChange={e => setFirstname(e.target.value
            )} />
          <input name="lasttname" type="text" placeholder="lastname"  onChange={e => setLastname(e.target.value
            )} />
          <input name="participation" type="text" placeholder="participation"  onChange={e => setParticipation(e.target.value
            )} />
            <Link id="link" to = '/modal'>
        <button type="button" onClick={()=>handleSubmite()}>enviar</button> 
            </Link>
      </form> 

    </Container>
  );
}
