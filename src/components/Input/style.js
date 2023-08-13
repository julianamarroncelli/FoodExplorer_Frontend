import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 2rem;
  font-weight: 400;

  line-height: 16px;


  input {
    width: 100%;
    padding: 10px;

    background: transparent;

   
    border-radius: 5px;
    border: none;

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
  }
`
