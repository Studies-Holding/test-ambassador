import "./panelGaucheConnexion.css";

function PanelGaucheConnexion() {
    return (

        <div className="col-lg-6 d-none d-lg-flex position-relative vh-100 login-left">

            <div className="login-overlay position-absolute top-0 start-0 w-100 h-100"></div>

            <div className="position-relative z-1 d-flex flex-column justify-content-between p-5 w-100">

                {/* Logo */}

                <div className="d-flex align-items-center">

                    <div className="logo-circle rounded-circle d-flex justify-content-center align-items-center">

                        <i className="bi bi-geo-alt"></i>

                    </div>

                    <h4 className="text-white fw-bold ms-3 mb-0">
                        Ma Vitrine Locale
                    </h4>

                </div>

                {/* Texte */}

                <div>

                    <h1 className="display-2 fw-bold text-white">

                        Les trésors du

                        <br />

                        <span className="text-warning">
                            Cameroun
                        </span>

                        ,

                        <br />

                        en ligne.

                    </h1>

                    <p className="text-white fs-4 mt-4">

                        Rejoignez des milliers
                        d'artisans et de clients
                        qui font confiance à notre plateforme.

                    </p>

                </div>

                {/* Indicateurs */}

                <div className="d-flex gap-2">
                    <span className="dot-green"></span>
                    <span className="dot-red"></span>
                    <span className="dot-yellow"></span>
                </div>

            </div>

        </div>

    );
}

export default PanelGaucheConnexion;