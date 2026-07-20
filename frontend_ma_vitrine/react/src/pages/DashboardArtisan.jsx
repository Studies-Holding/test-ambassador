import Navbar from "../composants/commun/Navbar";
import ArtisanStats from "../composants/dashboardArtisan/ArtisanStats";
import HeaderArtisan from "../composants/dashboardArtisan/HeaderArtisan";
import SidebarArtisan from "../composants/dashboardArtisan/SidebarArtisan";
import PendingAlert from "../composants/dashboardArtisan/PendingAlert";
import RecentProducts from "../composants/dashboardArtisan/RecentProducts";

function DashboardArtisan() {

    return(

        <>
            <Navbar 
                showSearch = {false}
                showNavigation = {false}
                showCart = {false}
                showExplorer = {false}
            />
            <div className="container-fluid">
                <div className="row">
                    <SidebarArtisan />
                    <main className="col-lg-10 p-4">
                        <HeaderArtisan />
                        <ArtisanStats />
                        <PendingAlert />
                        <RecentProducts />
                    </main>
                </div>
            </div>
        </>
       
    );
}

export default DashboardArtisan;