import {Routes, Route} from "react-router-dom";

import Acceuil from "./pages/Acceuil";
import PageConnexion from "./pages/PageConnexion";
import DashboardClient from "./pages/DashboardClient";
import DashboardArtisan from "./pages/DashboardArtisan";

function App() {
  
  return (

    <Routes>
      
      <Route path="/" element={<Acceuil />} />

      <Route path="/connexion" element={<PageConnexion />} />

      <Route path="/dashboard" element={<DashboardClient />} />

      <Route path="/dashboardArtisan" element={<DashboardArtisan />} />

    </Routes>
      
  );
}

export default App
