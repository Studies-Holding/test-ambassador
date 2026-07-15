function PendingAlert() {

    const pendingProducts = 1;

    if (pendingProducts === 0) {
        return null;
    }

    return (

        <div
            className="alert alert-warning d-flex align-items-center justify-content-between mb-5"
            role="alert"
        >

            <div>

                <i className="bi bi-clock-history me-2"></i>

                <strong>

                    {pendingProducts}

                </strong>

                {" "}produit(s) en attente d'approbation par l'administrateur.

            </div>

            <button
                className="btn btn-outline-warning btn-sm"
            >

                Voir

            </button>

        </div>

    );

}

export default PendingAlert;