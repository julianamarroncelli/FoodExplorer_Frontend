import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${({theme}) => theme.COLORS.DARK400};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.div` 
  padding: 16px;
  margin: 30px auto;
  width: 100%;
  max-width: 1260px;
  height: auto;


`
