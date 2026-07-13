import { useState } from "react";


function PasswordInput({password, setPassword}) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4">
            <label className="form-label fw-semibold">
                Mot de passe
            </label>
            <div className="position-relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={`bi ${
                        showPassword 
                        ? "bi-eye-slash" 
                        : "bi-eye"
                    } position-absolute top-50 end-0 translate-middle-y me-3`}
                    style={{cursor:"pointer"}}
                ></i>
            </div>
        </div>
    );
}


export default PasswordInput;