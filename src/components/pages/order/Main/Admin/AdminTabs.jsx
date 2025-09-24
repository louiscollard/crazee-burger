import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import Tab from "../../../../shared/Tab";

export default function AdminTabs() {
    const { isCollapsed,
        setIsCollapsed,
        isAddSelected,
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected
    } = useContext(OrderContext)

    const selectAddTab = () => {
        setIsCollapsed(false);
        setIsAddSelected(true)
        setIsEditSelected(false)
    }

    const selectEditTab = () => {
        setIsCollapsed(false);
        setIsAddSelected(false)
        setIsEditSelected(true)
    }

    return (
        <AdminTabsStyled>
            <Tab
                label={""}
                Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={isCollapsed ? "is-active" : ""}
            />
            <Tab
                label={"Ajouter un produit"}
                Icon={<AiOutlinePlus />}
                onClick={selectAddTab}
                className={isAddSelected ? "is-active" : ""}
            />
            <Tab
                label={"Modifier un produit"}
                Icon={<MdModeEditOutline />}
                onClick={selectEditTab}
                className={isEditSelected ? "is-active" : ""}
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        border-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
    }

    button {
        margin-left: 1px;
    }
`;
