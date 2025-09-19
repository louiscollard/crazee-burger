import { Link, useLocation } from "react-router"
export default function OrderPage() {
    const location = useLocation()
    const { TextInputValue } = location.state || {}

    return (
        <>
            <h3>{TextInputValue ? `Bonjour ${TextInputValue} !` : "Bonjour invité !"}</h3>
            <Link to={"/"} >
                <button>
                    Déconnexion
                </button>
            </Link >
        </>
    )
}