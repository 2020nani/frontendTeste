import React, {useState,useEffect}from 'react';
import {Form, Input} from '@rocketseat/unform'
import api from '../../services/api';
import {Container} from '../Header/styles';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstname: Yup.string()
  .required('Firstname e obrigatorio'),
  lastname: Yup.string()
  .required('Lastname e obrigatorio'),
  participation: Yup.number()
  .integer('Apenas numeros')
  .required('participation e obrigatorio')
})
export default function Header() {
  
  function handleSubmit(data) {
    console.log(data)
  }
  
  return (
    <Container>
      
     <Form schema={schema} onSubmit={handleSubmit}>
     <Input name="firstname" type="text" placeholder="firstname"/>
     <Input name="lastname" type="text" placeholder="lastname"/>
     <Input name="participation" type="text" placeholder="participation"/>
     <button type="button">Send</button>
     
     </Form>
     
    </Container>
  );
}
