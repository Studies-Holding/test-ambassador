import './hero.css'
import {useState, useEffect} from "react";
import {getProduits} from "../../services/serviceProduit";

function Hero() {

    const [produits, setProduits] = useState([]);
    useEffect(() => {
        async function afficherProduitHero() {
            try {
                const data = await getProduits();
                setProduits(data);
            } catch(error) {
                console.error(error);
            }
        }
        afficherProduitHero();
    }, []);

    return (
        <section className="bg-success text-white pt-5 position-relative">
            {/*image de fond pour le hero*/}
            <div className="backgroundHero"></div>
            <div className="container mesBoutons">
                <div className="row align-items-center">
                    {/*colonne gauche*/}
                    <div className="col-lg-6 text-center text-lg-start">
                        {/*Badge*/}
                        <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                            100% Produits Locaux camerounais
                        </span>  
                        {/*Le titre du hero*/}
                        <h1 className="display-4 fw-bold mb-3">
                            Découvrez les <span className="fw-bold text-warning">trésors</span> du cameroun
                        </h1>
                        {/*description du hero*/}
                        <p className="lead text-dark mb-4">
                            Miel artisanal, épices rares, café de montagne, artisanant  traditionnel — 
                            directement des mains de nos artisans locaux. 
                        </p>
                        {/*les boutons*/}
                        <div className="d-flex flex-wrap justify-content-lg-start gap-3 mb-5">
                            <a href="#" className="btn btn-warning btn-lg fw-semibold">
                                Explorer la marketplace
                            </a>
                            <a href="#" className="btn btn-lg btn-outline-warning text-light">
                                Devenir vendeur
                            </a>
                        </div>
                        {/*statistique*/}
                        <div className="row text-center">
                            <div className="col-4">
                                <h2 className="display-6 fw-bold">1 200+</h2>
                                <p className="text-muted">Clients</p>
                            </div>
                            <div className="col-4">
                                <h2 className="display-6 fw-bold">58</h2>
                                <p className="text-muted">Artisans</p>
                            </div>
                            <div className="col-4">
                                <h2 className="display-6 fw-bold">300+</h2>
                                <p className="text-muted">Produits</p>
                            </div>
                        </div>
                    </div>
                    {/*colonne droite*/}
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {/*Tous mes 4 produits*/}
                            {produits.map((produit) => (
                                <div key={produit.id} className="col-6 mb-3">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body text-center">
                                            <div className="display-1 mb-2">{produit.emoji}</div>
                                            <h6 className="card-title fw-bold mb-1">{produit.name}</h6>
                                            <p className="card-text text-warning fw-bold">{produit.price}FCFA</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>  
            </div>
            {/*drapeau du cameroun juste en dessous*/}
            <div className="row">
                <div className="col-12 d-flex">
                    {/*Bande verte*/}
                    <div className="flex-grow-1 bandeVerte"></div>
                    {/*Bande rouge*/}
                    <div className="flex-grow-1 bg-danger"></div>
                    {/*Bande jaune*/}
                    <div className="flex-grow-1 bg-warning"></div>
                </div>
            </div> 
        </section>
    )
}

export default Hero;