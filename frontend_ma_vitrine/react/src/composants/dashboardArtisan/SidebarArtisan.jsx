function SidebarArtisan() {

    return (

        <aside className="col-lg-2 bg-success text-white min-vh-100 p-0">

            <div className="p-4 border-bottom">

                <h4 className="fw-bold mb-0">

                    Ma Vitrine Locale

                </h4>

                <small>

                    Espace Artisan

                </small>

            </div>

            <nav className="mt-4">

                <ul className="nav flex-column">

                    <li className="nav-item">

                        <a
                            href="#"
                            className="nav-link text-white fw-semibold"
                        >
                            📊 Tableau de bord
                        </a>

                    </li>

                    <li className="nav-item">

                        <a
                            href="#"
                            className="nav-link text-white"
                        >
                            📦 Mes produits
                        </a>

                    </li>

                    <li className="nav-item">

                        <a
                            href="#"
                            className="nav-link text-white"
                        >
                            ➕ Ajouter un produit
                        </a>

                    </li>

                    <li className="nav-item">

                        <a
                            href="#"
                            className="nav-link text-white"
                        >
                            🔔 Notifications
                        </a>

                    </li>

                    <li className="nav-item">

                        <a
                            href="#"
                            className="nav-link text-white"
                        >
                            👤 Mon profil
                        </a>

                    </li>

                </ul>

            </nav>

        </aside>

    );

}

export default SidebarArtisan;