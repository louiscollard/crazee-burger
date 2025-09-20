import { useLocation } from "react-router";
import styled from "styled-components";
import Navbar from "../../shared/NavBar";
export default function OrderPage() {
    const location = useLocation()
    const { TextInputValue } = location.state || {}

    return (
        <OrderPageStyled>
            <div className="container">
                <div className="navbar">
                    <Navbar TextInputValue={TextInputValue} />
                </div>
                <div className="main">
                    Main
                </div>
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

        .navbar {
            background: blue;
            height: 10vh;
        }

        .main {
            background: green;
            flex: 1;
        }

    }
`;