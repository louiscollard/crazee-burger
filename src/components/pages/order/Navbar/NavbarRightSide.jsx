import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "../../../shared/ToggleButton";
import Profile from "./Profile";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {
    const [isModeAdmin, setIsModeAdmin] = useState(false);

    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.info("Mode admin activé", {
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setIsModeAdmin(!isModeAdmin)
    }

    return (
        <NavbarRightSideStyled>
            <ToggleButton
                isChecked={isModeAdmin}
                labelIfUnchecked="ACTIVER LE MODE ADMIN"
                labelIfChecked="DÉSACTIVER LE MODE ADMIN"
                onToggle={displayToastNotification}
            />
            <Profile username={username} />
            <ToastAdmin />
        </NavbarRightSideStyled >
    )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
`;