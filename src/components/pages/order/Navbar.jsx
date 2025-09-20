import styled from "styled-components";
import { theme } from "../../../theme";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <NavbarLeftSide />
            <NavbarRightSide username={username} />
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
    /* align-items: center; */
`;