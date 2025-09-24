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

    const selectTab = (tabSelected) => {
        setIsCollapsed(false);

        if (tabSelected === "add") {
            setIsAddSelected(true)
            setIsEditSelected(false)
        }

        if (tabSelected === "edit") {
            setIsEditSelected(true)
            setIsAddSelected(false)
        }
    }

    const tabsConfig = [
        {
            label: "",
            Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
            onClick: () => setIsCollapsed(!isCollapsed),
            className: isCollapsed ? "is-active" : "",
        },
        {
            label: "Ajouter un produit",
            Icon: <AiOutlinePlus />,
            onClick: () => selectTab('add'),
            className: isAddSelected ? "is-active" : ""
        },
        {
            label: "Modifier un produit",
            Icon: <MdModeEditOutline />,
            onClick: () => selectTab('edit'),
            className: isEditSelected ? "is-active" : ""
        }
    ]

    return (
        <AdminTabsStyled>
            {tabsConfig.map((tab) => {
                return <Tab label={tab.label} Icon={tab.Icon} onClick={tab.onClick} className={tab.className} />
            })}
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    display: flex;
    padding: 0 20px;

    .is-active {
        background: ${theme.colors.background_dark};
        color: ${theme.colors.white};
        border-color: ${theme.colors.background_dark};
        border-bottom: 2px;
    }

    button {
        margin-left: 1px;
    }
`;
