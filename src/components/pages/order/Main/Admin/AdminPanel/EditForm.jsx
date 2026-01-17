import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EditForm() {
    return (
        <EditFormStyled>
            <p>Cliquer sur un produit pour le modifier</p>
            <HiCursorClick className="icon" />
        </EditFormStyled>
    )
}

const EditFormStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    
    p {
        font-family: "Amatic SC", cursive;
        font-size: ${theme.fonts.size.P3};
        color: ${theme.colors.greyMedium};
    }

    .icon {
        margin-left: ${theme.spacing.xs};
        font-size: ${theme.fonts.size.P3};
        color: ${theme.colors.greyDark};
    }
`;
