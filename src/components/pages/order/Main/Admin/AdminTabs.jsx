import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Tab from "../../../../shared/Tab";

export default function AdminTabs({ isCollapsed, setIsCollapsed }) {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsCollapsed(!isCollapsed)
        setIsActive(!isActive)
    }

    return (
        <AdminTabsStyled>
            <Tab
                label={""}
                Icon={isActive ? <FiChevronDown /> : <FiChevronUp />}
                onClick={handleClick}
                className={isActive ? "" : "is-active"}
            />
            <Tab
                label={"Ajouter un produit"}
                Icon={<AiOutlinePlus />}
                onClick={handleClick}
                className={isActive ? "" : "is-active"}
            />
            <Tab
                label={"Modifier un produit"}
                Icon={<MdModeEditOutline />}
                onClick={handleClick}
                className={isActive ? "" : "is-active"}
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
