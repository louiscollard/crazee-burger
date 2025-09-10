import { Link, useLocation } from "react-router"
export default function OrderPage() {
    const location = useLocation()
    const { name } = location.state || {}
    return (
        <>
            <h3>{name ? `Bonjour ${name} !` : "Bonjour invité !"}</h3>
            <Link to={"/"} >
                <button>
                    Déconnexion
                </button>
            </Link >
        </>
    )
}