import React,{useState}  from 'react';
import {Chart} from 'react-google-charts'
import {Container,Grafico,Tabela} from '../Home/styles'

export default function Home() {
  const [options, setOptions] = useState({
    title: 'Grafico de participacao'
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
     <Tabela>
     <table>
       <tr>
         <td></td>
         <td>FirstName</td>
         <td>LastName</td>
         <td>Participation</td>
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
      width={'20vw'}
      height={'20vh'}
      chartType="PieChart"
      data={data}
      options={options}
      />
     </Grafico>
   </Container>
     
  );
}

