import styled from "styled-components";
import Logo from "../../shared/Logo";

export default function NavbarLeftSide() {
    return (
        <div className="left-side">
            Left
            <Logo />
        </div>
    )
}

const NavbarLeftSideStyled = styled.div`
    background: violet;
`;