import { useEffect, useState } from "react";
import { getProduits } from "../../services/serviceProduit";

function FeatureProduits() {

    //state qui contiendra les produits reçus du serveur
    const [produits, setProduits] = useState([]);
    
    //exécuté une seule fois au chargement du composant
    useEffect(() => {
        async function chargerProduits() {
            try {
                const data = await getProduits();
                setProduits(data);
            } catch (error) {
                console.error(error);
            }
        }
        chargerProduits();
    },[]);

    return (
        <section className="py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="display-6 fw-bold">Produits à la une</h5>
                    <a href="#" className="text-success text-decoration-none">
                        Voir tout <i className="bi bi-arrow-right ms-1"></i>
                    </a>
                </div>
                {/*grille des 4 produits*/}
                <div className="row g-4">
                    {produits.map((produit) => (
                        <div key={produit.id} className="col-md-6 col-lg-3">
                            <div className="card border-0 shadow-sm h-100">
                            <div className="card-body text-center">
                                {/*image du produit*/}
                                <div className="display-1 mb-3">
                                    {produit.emoji}
                                </div>
                                {/*Titre du produit*/}
                                <h5 className="card-title fw-bold">
                                    {produit.name}
                                </h5>
                                {/*Artisan*/}
                                <p className="card-text text-muted mb-2 ">
                                    par {produit.artisan}
                                </p>
                                {/*prix*/}
                                <p className="card-text fw-bold text-success mb-0 fs-5">
                                    {produit.price} FCFA
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureProduits;