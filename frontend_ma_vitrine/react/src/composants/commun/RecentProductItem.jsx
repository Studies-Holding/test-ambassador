function RecentProductItem({ product }) {

    return (

        <li className="list-group-item">

            <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-circle me-3"
                        width="55"
                        height="55"
                    />

                    <div>

                        <h6 className="fw-bold mb-1">

                            {product.name}

                        </h6>

                        <small className="text-muted">

                            {product.price} FCFA · {product.stock} en stock

                        </small>

                    </div>

                </div>

                <span
                    className={`badge ${
                        product.status === "Approuvé"
                            ? "bg-success"
                            : "bg-warning text-dark"
                    }`}
                >

                    {product.status}

                </span>

            </div>

        </li>

    );

}

export default RecentProductItem;