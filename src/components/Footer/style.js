import styled from 'styled-components'

export const Container = styled.div`
 height: 7.7rem;
  width: 100%;
  background: ${({theme}) => theme.COLORS.DARK600};
  padding: 2.0rem;
  position: relative;
  bottom: 0;

`

export const Content = styled.div`
  max-width: 1000px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.FC_LIGHT700};
      line-height: 30px;
    }
  }

  span {
    color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
    font-size: 1.4rem;
    line-height: 14px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
