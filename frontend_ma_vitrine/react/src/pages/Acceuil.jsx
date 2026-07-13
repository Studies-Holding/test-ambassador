import Navbar from '../composants/commun/Navbar'
import Hero from '../composants/acceuil/Hero'
import Features from '../composants/acceuil/Features'
import FeatureProduits from '../composants/acceuil/FeatureProduits'
import CallArtisan from '../composants/acceuil/CallArtisan'
import Footer from '../composants/commun/Footer'

function Acceuil() {

    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <FeatureProduits />
            <CallArtisan />
            <Footer />
        </>
    );
}

export default Acceuil;