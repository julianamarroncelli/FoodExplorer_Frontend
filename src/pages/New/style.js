import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
`

export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1260px;
  padding: 10px;

  h2 {
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 45px;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
  }

  form {
    width: 100%;
    height:auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }

  .wrapper {
    display: flex;
    gap: 30px;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }

  .files {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 20%;    
    font-size: 28px;
    font-weight: 400;
    line-height: 16px;

    input[type='file'] {
      display: none;
    }
    
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 16px;
      background-color:${({ theme }) => theme.COLORS.DARK800};
      border-radius: 5px;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      cursor: pointer;
    }
  }
  .inputs-box-name{
    width: 40%;
  }
  .inputs-box-name input{
    padding: 16px;
    background-color:${({ theme }) => theme.COLORS.DARK800};
  }

  .select input{
    
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_WHITE};
  }

  label{
    font-size: 18px;
  }

  .select {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 2rem;
    font-weight: 400;
    line-height: 16px;
    

    select {
      background-color:${({ theme }) => theme.COLORS.DARK800};
      border-radius: 8px;
      color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
      padding: 16px;
      border: none;
      padding: 16px;
      width: 100%;
      font-size: 1.6rem;
    }

    option {
      font-size: 1.6rem;
      background-color: #192227;
    }
  }
  .inputs-box-ingredients{
    width: 80%;
    gap: 50px;
    border-radius: 8px;
    padding: 8px;
  }

  .inputs-box {
    width: 80%;     
  }

  .inputs-box input{
    background-color:${({ theme }) => theme.COLORS.DARK800};
    border-radius: 8px;
    padding:8px;
  }

  p{
    font-size: 18px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background: transparent;
    padding: 5px;
    border-radius: 8px;
    font-size: 16px;
  }

  .price {
    width: 30%;
    font-size: 28px;
  }

  input{
    background-color:${({ theme }) => theme.COLORS.DARK800};
  }

  .textarea {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 28px;
  }
  textarea {
    padding: 16px;
    width: 100%;
    height: 150px;
    resize: none;
    border-radius: 5px;
    background-color:${({ theme }) => theme.COLORS.DARK800};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
    border: none;
  }

  .add {
    align-self: flex-end;
    width: 30%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
    border-radius: 5px;
    line-height: 24px;
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
  }


  @media (max-width: 1024px) {
    height: auto;
    padding: 16px;

    form {
      height: auto;

    }

    .files {
      width: 100%;

      label {
        width: 100%;
      }
    }

    .select {
      width: 100%;
    }
    .tags {
      justify-content: flex-start;
      gap: 10px;
      div {
        margin-left: 10px;
        width: 45%;
        padding: 2px;
      }
    }
    .price {
      width: 100%;
    }
    .add {
      width: 100%;
    }
  }

  @media (max-width: 400px) {
    .wrapper {
      flex-direction: column;
    }
    .tags {
      div {
        padding: 5px 0;
        margin-left: 0px;
        width: 100%;
      }
    }
  }
  `
