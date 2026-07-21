import {Link} from "react-router-dom";
import './Navbar.css';
import {getMe} from "../../services/serviceAuthenti";
import { logout } from "../../services/serviceAuthenti";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Navbar({
    showSearch = false,
    showCart = false,
    showNavigation = false,
    showExplorer =false
}) {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const initials = user ? user.name.split(" ").map(word => word[0]).slice(0, 2).join("").toUpperCase() : "";

    function handleLogout() {
        logout();
        setUser(null);
        navigate("/");
    }
        useEffect(() => {
            async function loadUser() {
                try {
                    const data = await getMe();
                    setUser(data.user);
                } catch(error) {
                    console.error(error.message);
                }
            }
            loadUser();
        }, []);
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    {/*Logo*/}
                    <i className="bi bi-geo-alt-fill text-success me-2"></i>
                    <Link to="/" className="navbar-brand fw-bold me-3">
                        Ma vitrine <span className="text-success">Locale</span>
                    </Link>
                </div>

                {/*Bouton hamburger pour masquer le menu*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
             
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/*Recherche*/}
                    {
                        showSearch && (
                            <input placeholder="Rechercher des produits locaux..." className="form-control w-25 rounded-pill search-input" />
                        )
                    }
                    {/*Menu de navigation*/}
                    {
                        showNavigation && (
                            <ul className="navbar-nav mx-auto align-items-center">
                                <li className="nav-item">
                                    <Link to="/produits" className="nav-link fw-medium text-secondary">Produits</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link fw-medium text-secondary">Artisans</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blogs" href="#" className="nav-link fw-medium text-secondary">Blogs</Link>
                                </li>
                            </ul>
                        )
                    }

                    <ul className="navbar-nav align-items-center ms-auto">
                        {/*Cart*/}
                        {
                            showCart && (
                            
                                    <li className="nav-item me-3">
                                        <Link to="/panier" className="btn btn-outline-secondary rounded-pill btn-sm fw-bold text-lead d-flex align-items-center">
                                            <i className="bi bi-cart me-1"></i>
                                            Panier
                                        </Link>
                                    </li>
                            )
                        }
                        
                        {/*Boutton explorer*/}
                        {
                            showExplorer && (
                                    <li className="nav-item">
                                        <a href="#" className="btn btn-success btn-sm me-4">Explorer</a>
                                    </li>
                            )
                        }
                        {/*utilisateur connecté*/}
                        {
                            user ? (
                                <li className="nav-item dropdown ">
                                    <button className="btn user-avatar dropdown-toggle" data-bs-toggle="dropdown">
                                        {initials}
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <Link className="dropdown-item" to="/profil">Mon profil</Link>    
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/commandes">Mes commandes</Link>    
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />    
                                        </li>    
                                        <li>
                                            {/*bouton se déconnecter*/}
                                            <button className="dropdown-item text-danger" onClick={handleLogout}>
                                                Se déconnecter
                                            </button>
                                        </li>
                                    </ul> 
                                </li>
                            ) :    
                            (
                                <>
                                    {/*Bouton se connecter*/}
                                    <li className="nav-item me-3">
                                        <Link to="/connexion" className="btn btn-outline-success rounded-pill btn-sm ms-2">Se connecter</Link>
                                    </li>
                                </>  
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;