import FormInscription from "../composants/auth/FormInscription";
import HeroInscription from "../composants/auth/HeroInscription";

function PageInscription() {
    return (
        <div className="container-fluid">
            <div className="row">
                <HeroInscription />
                <FormInscription />
            </div>
        </div>
    );
}

export default PageInscription;