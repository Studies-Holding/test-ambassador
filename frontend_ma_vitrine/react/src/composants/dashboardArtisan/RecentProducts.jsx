import RecentProductItem from "../commun/RecentProductItem";

function RecentProducts() {

    const products = [

        {
            id: 1,
            name: "Miel de Forêt de Dschang",
            price: 4500,
            stock: 48,
            status: "Approuvé",
            image: "https://picsum.photos/60?random=1"
        },

        {
            id: 2,
            name: "Cacao Brut du Cameroun",
            price: 5500,
            stock: 45,
            status: "En attente",
            image: "https://picsum.photos/60?random=2"
        }

    ];

    return (

        <div className="card shadow-sm border-0">

            <div className="card-header bg-white d-flex justify-content-between align-items-center">

                <h5 className="fw-bold mb-0">

                    Mes produits récents

                </h5>

                <button className="btn btn-link text-success text-decoration-none">

                    Voir tout

                </button>

            </div>

            <ul className="list-group list-group-flush">

                {products.map((product) => (

                    <RecentProductItem
                        key={product.id}
                        product={product}
                    />

                ))}

            </ul>

        </div>

    );

}

export default RecentProducts;