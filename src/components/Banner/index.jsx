import React from 'react';
import { Container } from "./style";
import imgBanner from '../../assets/images/imageHome.png'

export function Banner (){
  return(
    <Container>
      <img src={imgBanner} />
      <div className="title">
        <h1> Sabores inigualáveis </h1>
        <p> Sinta o cuidado do preparo com ingredientes selecionados </p>  
      </div>
 
    </Container>
  )
}
