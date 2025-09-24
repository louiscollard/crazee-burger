import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
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
                Icon={isActive ? <FiChevronDown /> : <FiChevronUp />}
                onClick={handleClick}
                className={isActive ? "" : "is-active"}
            />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`

`;
