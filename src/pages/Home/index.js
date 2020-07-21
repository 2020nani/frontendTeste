import React,{useState}  from 'react';
import {Chart} from 'react-google-charts'
import {Container} from '../Home/styles'

export default function Home() {
  const [options, setOptions] = useState({
    title: 'Grafico de participacao'
  })
  const [data,setData] = useState([
    ['nome', 'participacao'],
    ['hernani', 100],
    ['junior', 90],
    ['vania', 110]
  ])
  return (
   <Container>
     <div>
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
     </div>
     <div>
      <Chart
      width={'500px'}
      height={'300px'}
      chartType="PieChart"
      data={data}
      options={options}
      />
     </div>
   </Container>
     
  );
}

