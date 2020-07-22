import React,{useState}  from 'react';
import {Chart} from 'react-google-charts'
import {Container,Grafico,Tabela,Session} from '../Home/styles'

export default function Home() {
  const [options, setOptions] = useState({
    title: 'Grafico de participacao',
    is3D: true
  })
  const [data,setData] = useState([
    ['nome', 'participacao'],
    ['hernani', 100],
    ['junior', 90],
    ['vania', 110],
    ['mauro',90]
  ])
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
       <tr>
         <td>1</td>
         <td>Hernani</td>
         <td>Almeida</td>
         <td>20%</td>
       </tr>
       <tr>
         <td>1</td>
         <td>Hernani</td>
         <td>Almeida</td>
         <td>20%</td>
       </tr>
       <tr>
         <td>1</td>
         <td>Hernani</td>
         <td>Almeida</td>
         <td>20%</td>
       </tr>
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

