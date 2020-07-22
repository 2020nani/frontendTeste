import styled from 'styled-components';
export const Container = styled.div`
max-width:100vw;
margin:0;
font-family: Arial, Helvetica, sans-serif;
h1{
  text-align:center
  margin-top:2vw;
  margin-left:2vw
}
p{
  text-align:center;
  margin-top:2vw;
  margin-left:1vw;
  font-size:2vw
}
`
export const Session = styled.div`
display:flex;
justify-content:space-between;
max-width:94vw;
margin:0;
`

export const Tabela = styled.div`
display:flex;
justify-content:center;
width:47vw;
margin-top: 3vh;
margin-left:2vw;
table,th,tr,td{
  width:30vw;
  border: 0.5px solid black;
  text-align:left;
  font-size:1.4vw;
}

`
export const Grafico = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:47vw;
margin-top: 3vh;
margin-right:2vw;
margin-left:1vw;

`
