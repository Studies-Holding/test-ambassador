import ProductCard from "../commun/ProductCard";

function RecommendedProducts() {

    const products = [
        {
            id: 1,
            name: "Miel de Forêt",
            price: 4500,
            category: "Alimentation"
        },
        {
            id: 2,
            name: "Café de Menoua",
            price: 3200,
            category: "Boissons"
        },
        {
            id: 3,
            name: "Poivre de Penja",
            price: 2800,
            category: "Épices"
        },
        {
            id: 4,
            name: "Huile de Palme",
            price: 1800,
            category: "Alimentation"
        }
    ];

    return (
        <section className="mt-5">

            <h2 className="fw-bold mb-4">
                Produits recommandés
            </h2>

            <div className="row g-4">

                {products.map((product) => (

                    <div
                        className="col-12 col-md-6 col-lg-3"
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </div>

                ))}

            </div>

        </section>
    );
}

export default RecommendedProducts;