

function Features() {

    //Tableau des avantages
        const features = [
            {
                icon: 'bi-check-circle',
                title: 'Produits authentiques',
                description: 'Chaque produit est vérifié et approuvé par notre équipe avant d\'être mis en vente.'
            },
            {
                icon: 'bi-tree',
                title: '100% Local & Bio',
                description: 'Des artisans camerounais qui travaillent dans le respect des traditions et de la nature.'
            },
            {
            icon: 'bi-truck',
            title: 'Livraison rapide',
            description: 'Livraison dans toutes les villes du Cameroun. Suivi de commande en temps réel.'
            },
            {
                icon: 'bi-globe',
                title: 'Portée internationale',
                description: 'Nos artisans accèdent à un marché mondial tout en restant ancrés localement.'
            },
            {
                icon: 'bi-award',
                title: 'Artisans certifiés',
                description: 'Chaque vendeur est inscrit et vérifié pour garantir la qualité et l\'authenticité.'
            },
            {
                icon: 'bi-shield-check',
                title: 'Paiement sécurisé',
                description: 'Transactions sécurisées avec protection de vos données personnelles et financières.'
            }
        ];
    return (
        <section className="py-5 bg-light">
            <div className="container">
                {/*Titre de la section des caractéristiques*/}
                <h2 className="text-center display-5 fw-bold mb-3">
                    Pourquoi choisir Ma Vitrine Locale ?
                </h2>
                <p className="text-center text-muted mb-5 fs-5">
                    Une plateforme conçue pour valoriser et préserver le patrimoine artisanal du cameroun.
                </p>
                {/*Grille des avantages*/}
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-sm h-100 text-center">
                                <div className="card-body d-flex flex-column align-items-center">
                                    {/*Icone bootstrap*/}
                                    <div className="bg-success rounded-circle p-3 mb-3">
                                        <i className={`bi ${feature.icon}`} />
                                    </div>
                                    {/*Titre*/}
                                    <h5 className="card-title fw-bold">{feature.title}</h5>
                                    {/*Description*/}
                                    <p className="card-text text-muted mb-0">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;    