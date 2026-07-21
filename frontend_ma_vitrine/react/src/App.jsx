import {Routes, Route} from "react-router-dom";

import Acceuil from "./pages/Acceuil";
import PageInscription from "./pages/PageInscription"
import PageConnexion from "./pages/PageConnexion";
import DashboardClient from "./pages/DashboardClient";
import DashboardArtisan from "./pages/DashboardArtisan";
import PageProduit from "./pages/PageProduits";
import PageBlogs from "./pages/PageBlogs";

function App() {
  
  return (

    <Routes>
      
      <Route path="/" element={<Acceuil />} />

      <Route path="/inscription" element={<PageInscription />} />

      <Route path="/connexion" element={<PageConnexion />} />

      <Route path="/dashboard" element={<DashboardClient />} />

      <Route path="/dashboardArtisan" element={<DashboardArtisan />} />

      <Route path="/produits" element={<PageProduit />} />

      <Route path="/blogs" element={<PageBlogs />} />

    </Routes>
      
  );
}

export default App
