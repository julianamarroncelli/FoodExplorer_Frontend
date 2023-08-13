import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
 
`

export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  padding: 16px;

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
    height: 90vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }

  .editForm{
    margin:0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;
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
    width: 60%;
    
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
      padding: 10px;

      background-color:${({ theme }) => theme.COLORS.DARK800};
      border-radius: 5px;

      font-size: 18px;
      font-weight: 400;
      line-height: 24px;


      cursor: pointer;
    }
  }


  label{
    font-size: 18px;
  }

  .select {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 28px;
    font-weight: 400;
    line-height: 16px;

    select {
      background-color:${({ theme }) => theme.COLORS.DARK800};
      border-radius: 8px;
      color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
      padding: 10px;
      width: 100%;
      font-size: 1.6rem;
      font-weight: 400;
      border: none;
    }
    option {
      font-size: 1.6rem;
      background-color: #192227;
      font-weight: 400;

      &:hover {
        background: white;
        color: black;
      }
    }
  }

  .inputs-box {
    width: 80%;     
  }

  .inputs-box input{
    background-color:${({ theme }) => theme.COLORS.DARK800};
    border-radius: 8px;
    padding:8px;
  }

  .ingredients {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 400; 
    font-size: 28px;
    height: 40px;

    line-height: 16px;
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
    border: none
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

    .textarea{
      width: 100%;
      margin-top: 10rem;
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
