import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  grid-area: header;
  background: ${({ theme }) => theme.COLORS.DARK600};
  max-height: 70px;

  .navbar {
    width:100%;
    padding:16px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
  }

  .nav-menu {
    width: 1260px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
  }

  .menu {
    display: none;
  }

  .favorites {
    width: auto;
    margin-right: 10px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.FC_LIGHT100};
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

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  .shop-cart {
    margin: 0;
    margin-left: 15px;
    color:  ${({ theme }) => theme.COLORS.FC_LIGHT100};
  }

  .exit {
    margin: 0;
  }

  @media (max-width: 768px) {

    .navbar{
      width: 100%;
    }
    
    .menu {
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
      background: ${({ theme }) => theme.COLORS.DARK600};
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

    .favorites,
    .shop-cart,
    .exit {
      margin: 0 auto;
    }

  }
`
