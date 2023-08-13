import React from 'react';
import { Container } from "./style";

export function Banner (){
  return(
    <Container>
      <img src="\src\assets\images\imageHome.png"/>
      
      <div className="title">
        <h1> Sabores inigualáveis </h1>
        <p> Sinta o cuidado do preparo com ingredientes selecionados </p>  
      </div>
 
    </Container>
  )
}
