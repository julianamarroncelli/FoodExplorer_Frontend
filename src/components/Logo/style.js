import styled from "styled-components";

export const Container = styled.div`
    width:auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: transparent;
    
   #logo{
   width:36px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background: ${({ theme }) => theme.COLORS.DARK600};
   gap: 1.0rem;
   }

 h1, svg{
  background: ${({ theme }) => theme.COLORS.DARK600};  
 }

 h1{
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};  
 }
 svg{
   width: 30px;
 }

`