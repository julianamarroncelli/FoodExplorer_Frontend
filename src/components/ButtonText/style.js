import styled from 'styled-components'

export const Container = styled.button`
  width:100%;
  margin-top: 1.6rem;
  background: transparent;
  border: none;

  display: flex;
  gap: 5px;

  align-items: center;
  text-align: center;
  font-family: ${({ theme }) => theme.COLORS.FONT_TEXT};
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
  line-height: 14px;
`
