import styled from 'styled-components';

export const Container = styled.div`
max-width:100vw;
margin:0;
height:14vh;
background: lightSkyblue;
display:flex;
justify-content:center;
align-items:center
font-family: Arial, Helvetica, sans-serif;
form{
  display:flex;
  flex-direction: inline;
  
}
input{
  display:flex;
  justify-content:center;
  align-items:center;
  text-transform:capitalize;
  border:0;
  border-radius:4px;
  width:15vw;
  height: 5vh;
  padding:0 15px;
  margin-left:1vw;
  font-size:2vw
}
button{
  text-transform:capitalize;
  display:flex;
  justify-content:center;
  align-items:center
  width:10vw;
  height: 5vh;
  margin-left:4vw;
  font-size:2vw
  transition:all 0.5s ease-in-out;
  &:hover{
    background: lightblue;
  }
  &focus{
    outline:none;
  }
}
 #link{
   text-decoration:none
 }
`



