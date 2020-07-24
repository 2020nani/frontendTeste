import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts'
import { Container, Grafico, Tabela, Session } from '../Home/styles'
import api from '../../services/api'

export default function Home() {
  const [options, setOptions] = useState({
    title: 'Grafico de participacao',
    is3D: true
  })
  const [data, setData] = useState([
    ['nome', 'participacao'],
    ['hernani', 100],
    ['junior', 90],
    ['vania', 110],
    ['mauro', 90]
  ])
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
            </tr>
            {dados.map(data =>(
              <tr>
              <td>{data.id}</td>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.participation}</td>
            </tr>
            ))}
            <button type="button">Atualizar</button>
            <button type="button">Deletar</button>
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

