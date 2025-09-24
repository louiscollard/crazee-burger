import styled from "styled-components";
import { theme } from "../../../../theme";
import { refreshPage } from "../../../../utils/window";
import Logo from "../../../shared/Logo";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar() {
    return (
        <NavbarStyled>
            <Logo className="logo-order-page" onClick={refreshPage} />
            <NavbarRightSide />
        </NavbarStyled>
    )
}
const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};
    /* align-items: center; */
`;