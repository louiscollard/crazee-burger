import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router";
import styled from "styled-components";
import Logo from "./Logo";

export default function Navbar({ TextInputValue }) {
    return (
        <NavBarStyled>
            <div className="left-side">
                Left
                <Logo />
            </div>
            <div className="right-side">
                Right
                <BsPersonCircle />
                <h3>{TextInputValue ? `Bonjour ${TextInputValue} !` : "Bonjour invité !"}</h3>
                <Link to={"/"} >
                    <button>
                        Se déconnecter
                    </button>
                </Link >
            </div>
        </NavBarStyled>
    )
}
const NavBarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    .left-side {
        background: violet;
    }

    .right-side {
        background: purple;
    }

`;