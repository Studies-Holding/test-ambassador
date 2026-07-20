import Navbar from "../composants/commun/Navbar";
import HeroDashboard from "../composants/dashboard/HeroDashboard";
import DashboardStats from "../composants/dashboard/DashboardStats";
import RecommendedProducts from "../composants/dashboard/RecommendedProducts";

function DashboardClient() {

    return (
        <>
            <Navbar 
                showSearch = {true}
                showNavigation = {true}
                showCart = {true}
                showExplorer = {true}
            />
            <div className="container py-4">
                <HeroDashboard />
                <DashboardStats />
                <RecommendedProducts />
            </div>
        </>
    );
}

export default DashboardClient;