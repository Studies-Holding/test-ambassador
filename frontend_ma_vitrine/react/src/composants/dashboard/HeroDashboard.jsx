import { useEffect, useState } from "react";
import { getMe } from "../../services/serviceAuthenti";

function HeroDashboard() {
    
    const [user, setUser] = useState(null);
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
        <div className="bg-success text-white rounded-4 p-5 mb-4">
            <h1 className="fw-bold">
                Bonjour {user ? user.name : "..."} 👋
            </h1>
            <p className="fs-5">Heureux de vous revoir sur Ma Vitrine Locale.</p>
            <button className="btn btn-light mt-3">Continuer mes achats</button>
        </div>
    );
}

export default HeroDashboard;