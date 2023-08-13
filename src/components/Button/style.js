import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  max-height: 50px;
  background: ${({ theme }) => theme.COLORS.TOMATO100};
  display: flex;
  justify-content: center;
  gap: 10px;

  align-items: center;

  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
  line-height: 24px;

  border: none;
  border-radius: 8px;

  padding: 12px;

  cursor: ${({ loading }) => (loading ? 'wait' : '')};

  &:disabled {
    background-color: gray;
  }

  :hover{
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.TOMATO300} ;
  }
`
