import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm" >
            <div className="container">
                {/*Logo*/}
                <a href="#" className="navbar-brand fw-bold">
                    Ma vitrine <span className="fw-bold text-success">Locale</span>
                </a>
                {/*Bouton hamburger pour masquer le menu*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*Menu de navigation*/}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto align-items-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-medium text-secondary">Produits</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-medium text-secondary">Artisans</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link fw-medium text-secondary">À propos</a>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav align-items-center">
                        {/*Bouton se connecter*/}
                        <li className="nav-item">
                            <Link to="/connexion" className="btn btn-outline-success rounded-pill btn-sm ms-2">Se connecter</Link>
                        </li>
                        {/*Boutton explorer*/}
                        <li className="nav-item">
                            <a href="#" className="btn btn-success btn-sm ms-2">Explorer</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;