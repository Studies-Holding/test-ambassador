import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import { signUp } from "../../services/serviceAuthenti";

function FormInscription() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({

        name: "",
        email: "",
        password: "",
        role: "CLIENT",
        address: "",
        contact: "",
        sector: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signUp(user);
            setMessage(response.message);
            navigate("/");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="col-lg-6 d-flex justify-content-center align-items-center vh-100">
            <div className="w-75">
                <h2 className="fw-bold mb-4">
                    Créer un compte
                </h2>
                {message && (
                    <div className="alert alert-info">
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Nom complet
                        </label>
                        <input
                            className="form-control"
                            value={user.name}
                            onChange={(event) =>
                                setUser({
                                    ...user,
                                    name: event.target.value
                                })
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            onChange={(event) =>
                                setUser({
                                    ...user,
                                    email: event.target.value
                                })
                            }
                        />
                    </div>
                    <PasswordInput
                        password={user.password}
                        setPassword={(value) =>
                            setUser({
                                ...user,
                                password: value
                            })
                        }
                    />

                    <div className="mb-3">

                        <label className="form-label">
                            Je suis
                        </label>
                        <select
                            className="form-select"
                            value={user.role}
                            onChange={(event) =>
                                setUser({
                                    ...user,
                                    role: event.target.value
                                })
                            }
                        >
                            <option value="CLIENT">
                                Client
                            </option>
                            <option value="ARTISAN">
                                Artisan
                            </option>
                        </select>
                    </div>
                    {user.role === "ARTISAN" && (
                        <>
                            <div className="mb-3">
                                <label className="form-label">
                                    Adresse
                                </label>
                                <input
                                    className="form-control"
                                    value={user.address}
                                    onChange={(event) =>
                                        setUser({
                                            ...user,
                                            address: event.target.value
                                        })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Téléphone
                                </label>
                                <input
                                    className="form-control"
                                    value={user.contact}
                                    onChange={(event) =>
                                        setUser({
                                            ...user,
                                            contact: event.target.value
                                        })
                                    }
                                />

                            </div>

                            <div className="mb-4">
                                <label className="form-label">
                                    Secteur d'activité
                                </label>
                                <input
                                    className="form-control"
                                    value={user.sector}
                                    onChange={(event) =>
                                        setUser({
                                            ...user,
                                            sector: event.target.value
                                        })
                                    }
                                />

                            </div>
                        </>
                    )}
                    <button
                        className="btn btn-success w-100"
                        type="submit"
                    >
                        Créer mon compte
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormInscription;