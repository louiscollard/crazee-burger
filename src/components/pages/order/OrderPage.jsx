import { useLocation } from "react-router";
import styled from "styled-components";
import Main from "./Main";
import Navbar from "./NavBar";

export default function OrderPage() {
    const location = useLocation()
    const { username } = location.state || {}

    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar username={username} />
                <Main />
            </div>
        </OrderPageStyled>
    )
}

const OrderPageStyled = styled.div`
    background: orange;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
    }
`;