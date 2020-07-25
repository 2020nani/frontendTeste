import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { Container, Grafico, Tabela, Session } from '../Home/styles'
import api from '../../services/api'

export default function Home() {
  const [options, setOptions] = useState({
    title: 'Grafico de participacao',
    is3D: true
  });
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [participation, setParticipation] = useState({});
  const [data, setData] = useState([
    ['nome', 'participacao'],
    ['hernani', 100],
    ['junior', 90],
    ['vania', 110],
    ['mauro', 90]
  ]);
  const [dados, setDados] = useState([])
  
  useEffect(() => {
    async function loadDados() {

      const response = await api.get('dados')
      response.data.map(elem=>(
        
        data.push([elem.firstname,elem.participation])
      ))
      setDados(response.data)
      
      
    }
    loadDados()
  }, [])

  function remover(id){
     const response = api.delete(`dados/${id}`)
  }
  function handleSubmite(event,id) {
   
    const response =  api.update(`dados${id}` , {
      firstname,
      lastname,
      participation
     }) 
    
  }

  return (
    
    <Container>
    
      <h1>DATA</h1>
      <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
      <Session>
      
        <Tabela>
          <table>
            <tr>
              <th></th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Participation</th>
              <th>Atualizar Participation</th>
              <th>Deletar</th>
            </tr>
            {dados.map(data =>(
              <tr>
              <td>{data.id}</td>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.participation}</td>
            <td>
            <form onSubmit={handleSubmite}>
          <input name="firstname" type="text" placeholder="firstname" onChange={e => setFirstname(e.target.value
            )} />
          <input name="lasttname" type="text" placeholder="lastname"  onChange={e => setLastname(e.target.value
            )} />
          <input name="participation" type="text" placeholder="participation"  onChange={e => setParticipation(e.target.value
            )} />
            <Link to = '/modal'>
        <button type="button" onClick={()=>handleSubmite(data.id)}>enviar</button> 
            </Link>
      </form> 
            
              
              </td>
            <td>
              <Link to='/modaldelete'>
              <button type="button" onClick={()=>remover(data.id)}></button>
              </Link>
              </td>
              
            </tr>
            
            
             ))}
            
          </table>
        </Tabela>
       
        <Grafico>
          <Chart
            width={'100%'}
            chartType="PieChart"
            data={data}
            options={options}
          />
        </Grafico>
        
      </Session>
    </Container>

  );
}

