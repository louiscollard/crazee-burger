import styled from "styled-components";
import NavbarLeftSide from "./NavbarLeftSide";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ TextInputValue }) {
    return (
        <NavbarStyled>
            <NavbarLeftSide />
            <NavbarRightSide TextInputValue={TextInputValue} />
        </NavbarStyled>
    )
}
const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
`;