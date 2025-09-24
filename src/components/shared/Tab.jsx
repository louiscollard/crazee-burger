import styled from 'styled-components';
import { theme } from '../../theme/index';

export default function Tab({ Icon }) {
    return (
        <TabStyled>
            <div className="icon">{Icon}</div>
        </TabStyled>
    )
}

const TabStyled = styled.button`
    border: 1px solid blue;
    height: 43px;
    padding: 0 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    position: relative;
    left: 5%;
    top: 1px;

    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};

    border-width: 1px, 1px, 2px, 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};

    border-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;

    &:hover{
        border-bottom: ${theme.colors.white};
    }

    .icon {
        display: flex;
    }
`;