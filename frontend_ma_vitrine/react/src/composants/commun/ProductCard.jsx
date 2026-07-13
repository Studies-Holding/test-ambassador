function ProductCard({ product }) {

    return (

        <div className="card shadow-sm border-0 h-100">

            <div className="card-body d-flex flex-column">

                <span className="badge bg-success align-self-start mb-3">

                    {product.category}

                </span>

                <h5 className="card-title fw-bold">

                    {product.name}

                </h5>

                <p className="text-muted small">

                    Produit artisanal camerounais

                </p>

                <h4 className="text-success fw-bold mb-4">

                    {product.price} FCFA

                </h4>

                <button className="btn btn-success mt-auto">

                    Ajouter au panier

                </button>

            </div>

        </div>

    );

}

export default ProductCard;