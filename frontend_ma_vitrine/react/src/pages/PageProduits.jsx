import HeroProduit from "../composants/produit/HeroProduit";
import Navbar from "../composants/commun/Navbar";

function PageProduits () {
    return (
        <>
            <Navbar 
                showSearch = {true}
                showNavigation = {true}
                showCart = {true}
                showExplorer = {false}
            />
            <HeroProduit />
        </>
    );
}

export default PageProduits;