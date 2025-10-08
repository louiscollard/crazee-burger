
export default function EmptyMenuAdmin({ resetMenu }) {
    return (
        <div>
            <span>Pas de produits</span>
            <button onClick={resetMenu}>Générer de nouveaux produits</button>
        </div>
    )
}
