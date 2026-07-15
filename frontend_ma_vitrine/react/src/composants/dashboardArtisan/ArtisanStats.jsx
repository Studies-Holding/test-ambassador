function ArtisanStats() {

    const stats = [
        {
            id: 1,
            title: "Produits actifs",
            value: 1,
            icon: "📦",
            color: "success"
        },
        {
            id: 2,
            title: "En attente",
            value: 1,
            icon: "⏳",
            color: "warning"
        },
        {
            id: 3,
            title: "Ventes ce mois",
            value: 47,
            icon: "📈",
            color: "primary"
        },
        {
            id: 4,
            title: "Revenu (FCFA)",
            value: "184 500",
            icon: "💰",
            color: "secondary"
        }
    ];

    return (

        <div className="row g-4 mb-4">

            {stats.map((stat) => (

                <div
                    className="col-12 col-md-6 col-xl-3"
                    key={stat.id}
                >

                    <div className="card border-0 shadow-sm h-100">

                        <div className="card-body">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <h6 className="text-muted mb-0">
                                    {stat.title}
                                </h6>

                                <div
                                    className={`bg-${stat.color} bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center`}
                                    style={{
                                        width: "45px",
                                        height: "45px"
                                    }}
                                >
                                    {stat.icon}
                                </div>

                            </div>

                            <h2 className="fw-bold">
                                {stat.value}
                            </h2>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default ArtisanStats;