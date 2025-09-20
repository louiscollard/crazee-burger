import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router";
import styled from "styled-components";

export default function NavbarRightSide({ TextInputValue }) {
    return (
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
    )
}

const NavbarRightStyled = styled.div`
    background: purple;
`;