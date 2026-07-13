import PanelGaucheConnexion from "../composants/auth/PanelGaucheConnexion";
import FormConnexion from "../composants/auth/FormConnexion";

function PageConnexion() {

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                <PanelGaucheConnexion />
                <FormConnexion />
            </div>
        </div>
    );
}

export default PageConnexion;