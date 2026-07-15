function Footer() {

    //Liens pour la section "Acheter"
    const acheter = [
        {label: 'Tous les produits', href: '#'},
        {label: 'Catégories', href: '#'},
        {label: 'Promotions', href: '#'},
        {label: 'Nouveautés', href: '#'}

    ];
    //Liens pour la section "Vendre"
    const vendre = [
        {label: 'Devenir artisan', href: '#'},
        {label: 'Guide vendeur', href: '#'},
        {label: 'Tarifs', href: '#'},
        {label: 'Support vendeur', href: '#'}
    ];
    //Liens pour la section "Aide"
    const aide = [
        {label: 'FAQ', href: '#'},
        {label: 'Contact', href: '#'},
        {label: 'Politique de retour', href: '#'},
        {label: 'Mentions légales', href: '#'}
    ];

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row g-4">
                    {/*colonne 1:  marque*/}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-3">
                            <i className="bi bi-shop text-success me-2"></i>
                            Ma Vitrine Locale
                        </h5>
                        <p className="text-secondary small">La marketplace qui valorise le savoir-faire local camerounais.</p>
                    </div>
                    {/*colonne 2: acheter*/}
                    <div className="col-lg-3 col-6">
                        <h6 className="fw-bold mb-3">Acheter</h6>
                        <ul className="list-unstyled">
                            {acheter.map((lien, index) => (
                                <li key={index} className="mb-2">
                                    <a href={lien.href} className="text-secondary text-decoration-none">{lien.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*colonne 3: vendre*/}
                    <div className="col-lg-3 col-6">
                        <h6 className="fw-bold mb-3">Vendre</h6>
                        <ul className="list-unstyled">
                            {vendre.map((lien, index) => (
                                <li key={index} className="mb-2">
                                    <a href={lien.href} className="text-secondary text-decoration-none">{lien.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*colonne 4: aide*/}
                    <div className="col-lg-3 col-6">
                        <h6 className="fw-bold mb-3">Aide</h6>
                        <ul className="list-unstyled">
                            {aide.map((lien, index) => (
                                <li key={index} className="mb-2">
                                    <a href={lien.href} className="text-secondary text-decoration-none">{lien.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*copyright*/}
                <hr className="border-seconday mt-4" />
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-secondary small">&copy; 2020 Ma Vitrine Locale — Tous droits réservés</p>
                    <p className="text-secondary small">Fait avec  
                        <i className="bi bi-heart-fill text-danger ms-1 small"></i> pour les artisans du Cameroun
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;