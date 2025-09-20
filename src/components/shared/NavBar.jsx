import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router";
import styled from "styled-components";
import Logo from "./Logo";

export default function Navbar({ TextInputValue }) {
    return (
        <NavBarStyled>
            <Logo />
            <BsPersonCircle />
            <h3>{TextInputValue ? `Bonjour ${TextInputValue} !` : "Bonjour invité !"}</h3>
            <Link to={"/"} >
                <button>
                    Se déconnecter
                </button>
            </Link >
        </NavBarStyled>
    )
}
const NavBarStyled = styled.nav`
    background: blue;
    height: 10vh;
`;