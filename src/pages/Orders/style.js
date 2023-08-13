import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

`

export const Content = styled.div`
  padding: 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;



  h2 {
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 44px;
    margin-top: 5.0rem;
    margin-bottom: 50px;
    font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  }



  table,
  tr,
  td,
  th {
    border: 1px solid #192227;
  }

  table {
    border-spacing: 0;
    border-collapse: separate;
    border: 1px solid #192227;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    min-width: 680px;

    overflow-x: auto;
    margin-bottom: 10px;
  }

  th {
    color: ${({ theme }) => theme.COLORS.FC_LIGHT300};
    padding: 20px 30px;
    text-align: left;
    font-size: 1.6rem;
    font-weight: 700;
  }

  th:first-child {
    border-top-left-radius: 8px;
  }

  th:last-child {
    border-top-right-radius: 8px;
  }

  td {
    text-align: left;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};

    font-size: 2rem;
    line-height: 22px;
    font-weight: 400;
    line-height: 22px;
    padding: 20px 30px;
  }

  span {
    font-size: 1.6rem;
    line-height: 22px;
    font-weight: 400;
    line-height: 22px;
  }
  @media (max-width: 1000px) {
    th,
    td,
    select {
      padding: 10px;
    }
  }
`
