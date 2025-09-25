import { useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isAddSelected, setIsAddSelected] = useState(true);
    const [isEditSelected, setIsEditSelected] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");

    const OrderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected,
        currentTabSelected,
        setCurrentTabSelected
    }

    return (
        <OrderContext.Provider value={OrderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    )
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
    }
`;