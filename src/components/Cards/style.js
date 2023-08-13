import styled from 'styled-components'

export const Container = styled.div`
  max-width: 280px;
  padding: 16px;
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 16px;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 10px;


  .icon {
    align-self: flex-end;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
  }

  img {
    width: 130px;
  }

  .name {
    color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
    font-weight: 500;
    font-size: 2.0rem;
    line-height: 20px;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }

  h4 {
    color: #82f3ff;
    font-size: 1.8rem;
    font-weight: 400;
   
  }

  .quantity {
    display: flex;
    gap: 20px;
    padding: 0rem 5rem;
    > div {
      display: flex;
      font-size: 3rem;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-weight: 700;

      > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
      }
    }
  }
`
