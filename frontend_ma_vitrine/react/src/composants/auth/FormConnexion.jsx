import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import { login } from "../../services/serviceAuthenti";
import { Link } from "react-router-dom";


function FormConnexion() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = {
            email: email,
            password: password
        };
        try {
            const connectedUser = await login(user);
            localStorage.setItem("token", connectedUser.token);
            localStorage.setItem("role", connectedUser.role);

            if (connectedUser.role === "CLIENT") {
                navigate("/dashboard");

            } else if(connectedUser.role === "ARTISAN") {
                navigate("/dashboardArtisan");
            } 
        }catch (error) {
            setMessage(error.message);
        }
     };
    return (
        <div className="col-lg-6 d-flex align-items-center justify-content-center vh-100">
            <div className="w-75">
                {/* Retour */}
                <a
                    href="/"
                    className="text-decoration-none text-muted small"
                >
                    <i className="bi bi-chevron-left me-1"></i>
                    Retour à l'accueil
                </a>
                {/* Titre */}
                <h1 className="fw-bold mt-4">
                    Bon retour !
                </h1>
                <p className="text-muted mb-5">
                    Connectez-vous à votre espace
                </p>
                {/* Formulaire */}
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="form-label fw-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="vous@exemple.cm"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    {/* Password */}
                    <PasswordInput 
                        password={password}
                        setPassword={setPassword}
                    />
                    {/* Mot de passe oublié */}
                    <div className="text-end mb-4">
                        <a
                            href="#"
                            className="text-success text-decoration-none small"
                        >
                            Mot de passe oublié ?
                        </a>
                    </div>
                    {/* Bouton */}
                    {message && (
                         <div className="alert alert-info alert-danger">
                            {message}
                        </div>
                    )}
                    <button
                        className="btn btn-success btn-lg w-100"
                        type="submit"
                    >
                        Se connecter
                    </button>
                </form>
                {/* Footer */}
                <p className="text-center mt-5">
                    Pas encore de compte ?
                      <Link to="/inscription" className=" btn btn-outline-success fw-bold ms-1">S'inscrire</Link>
                </p>
            </div>
        </div>
    );
}

export default FormConnexion;