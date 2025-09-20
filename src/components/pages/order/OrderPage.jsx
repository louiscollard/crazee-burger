import { useLocation } from "react-router";
import styled from "styled-components";
import Navbar from "../../shared/NavBar";
import Main from "./Main";
export default function OrderPage() {
    const location = useLocation()
    const { TextInputValue } = location.state || {}

    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar TextInputValue={TextInputValue} />
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