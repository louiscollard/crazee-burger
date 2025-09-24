import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './Menu';

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">
          Admin
        </div>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1;
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  /* .basket {
    background: pink;
  } */

  .menu-and-admin{
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    .admin {
      border: 1px solid red;
      background: red;
      height: 250px;
      position: absolue;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`