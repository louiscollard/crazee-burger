import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import Tab from "../../../../shared/Tab";

export default function AdminTabs() {
    return (
        <AdminTabsStyled>
            <Tab Icon={<FiChevronDown />} />
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`

`;
