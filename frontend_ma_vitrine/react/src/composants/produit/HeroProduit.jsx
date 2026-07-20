import './heroProduit.css';

function HeroProduit() {

    return (
        <>
            <section className="position-relative bg-success text-white p-5">
                <div className="produitBackground"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <span className="badge rounded-pill small bg-warning px-3 py-2 mb-3"> Produits locaux du Cameroun</span>
                            <h2>Authtentique, Local, <br />Camerounais</h2>
                            <p>Découvrez 6 produits artisanaux verifés par notre équipe.</p>
                            <div className="input-group">
                                <label className="input-group-text" htmlFor="search">
                                    <i className="bi bi-search"></i>
                                </label>
                                <input type="text" className="form-control" id="search" placeholder="Rechercher des produits locaux..." />
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className="col-12 d-flex">
                <span className="flex-grow-1 green-flag"></span>
                <span className="flex-grow-1 bg-danger"></span>
                <span className="flex-grow-1 bg-warning"></span>
            </div>
            <section>
                <div className="container">
                    
                </div>
            </section>
        </> 
    );
}

export default HeroProduit;