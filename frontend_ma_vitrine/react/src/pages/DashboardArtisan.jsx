import ArtisanStats from "../composants/dashboardArtisan/ArtisanStats";
import HeaderArtisan from "../composants/dashboardArtisan/HeaderArtisan";
import SidebarArtisan from "../composants/dashboardArtisan/SidebarArtisan";
import PendingAlert from "../composants/dashboardArtisan/PendingAlert";
import RecentProducts from "../composants/dashboardArtisan/RecentProducts";

function DashboardArtisan() {

    return(
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
    );
}

export default DashboardArtisan;