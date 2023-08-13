

import styled from "styled-components";


export const Container = styled.div`
  width:90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height:180px;
  gap: 1.0rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 5.0rem;
  background:  ${({theme}) => theme.COLORS.GRADIENTS200};
  position: relative;

  .title{
    width: 210px;
    background:none;    
    margin: 0 auto;  
    position: relative;
    left:90px;
  }

  img{
    background: none;
    bottom: 0;
    width: 190px;
    height: 190px;
    position: absolute;
  }

  h1{
    font-family: Poppins , sans-serif;
    font-weight: 600;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.0rem;    
    background: none;
    color: ${({theme}) => theme.COLORS.FC_LIGHT300};
  }

  p{
    color: ${({theme}) => theme.COLORS.FC_LIGHT300};
    background: none;
    font-size: 12px;
    line-height: 25px;
    font-weight: 500;
    
  }


  @media (min-width: 700px){
    width: 100%;

    .title{
      width: 310px;
    }
    h1{
    font-size: 26px;
    line-height: 4.0rem;    
    background: none;
  }

  p{
    background: none;
    font-size: 1.8rem;
    line-height: 2.0rem;
    margin-top: 16px;
    
  }

  img{
    width:  350px;
    height: 230px;
  }
  
}


`