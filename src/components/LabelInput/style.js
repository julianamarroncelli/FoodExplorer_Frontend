import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  font-size: 1.8rem;
  font-weight: 400;
  line-height: 14px;

  margin-bottom: 1rem;

  label {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.COLOR_TEXT_GRAY};
  }

  input {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
    height: 48px;
    margin-top: 8px;

    padding: 1.6rem;
    background:${({ theme }) => theme.COLORS.DARK900};

    border: none;
    border-radius: 8px;
  }
`
