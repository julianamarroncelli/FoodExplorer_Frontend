import styled from 'styled-components'

export const Container = styled.header`
  width:100% ;
  grid-area: header;
  background-color:${({ theme }) => theme.COLORS.DARK600};
  height: 70px;

  .navbar {
    max-width: 1260px;
    width:100%;
    padding:16px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;


  }

  .nav-menu {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    background-color:${({ theme }) => theme.COLORS.DARK600};;
  }

  .menu {
    display: none;
  }


  .new {
    grid-area: new;
    margin: 0;
  }

  .search {
    width: auto;
    display: flex;
    align-items: center;
    background-color: #0d1d25;
    padding: 1rem;
    border-radius: 8px;

    input {
      padding: 0.5rem;
      width: auto;

      background-color: transparent;
      border: none;

      font-size: 14px;
      color:  ${({ theme }) => theme.COLORS.FC_LIGHT100};;

      :focus {
        outline: none;
      }
    }
  }
  .request {
    grid-area: request;

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .exit {
    grid-area: exit;
    margin: 0;
  }

  @media (max-width: 768px) {
    .menu {
      width: 80%;
      display: block;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
    }

    .nav-menu {
      position: fixed;
      top: -100%;
      gap: 0;
      display: flex;
      flex-direction: column;
      z-index: 1;
      background:${({ theme }) => theme.COLORS.DARK600};};

      width: 100%;
      text-align: center;
      transition: 0.5s;
    }

    .nav-item {
      margin: 16px 0;
      width: 80%;
    }

    .nav-menu.active {
      top: 70px;
    }

    .new,
    .exit {
      margin: 0 auto;
    }
  
`
