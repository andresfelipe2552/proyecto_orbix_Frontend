import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import LoginOpera from "./pages/LoginOpera/LoginOpera";

import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";
import DashboardCajero from "./pages/DashboardCajero/DashboardCajero";
import DashboardInventario from "./pages/DashboardInventario/DashboardInventario";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Logins */}
        <Route
          path="/login/admin"
          element={<LoginAdmin />}
        />

        <Route
          path="/login/opera"
          element={<LoginOpera />}
        />

        {/* Dashboards */}
        <Route
          path="/dashboard/admin"
          element={<DashboardAdmin />}
        />

        <Route
          path="/dashboard/cajero"
          element={<DashboardCajero />}
        />

        <Route
          path="/dashboard/inventario"
          element={<DashboardInventario />}
        />

        {/* Ruta por defecto */}
        <Route
          path="*"
          element={<Navigate to="/login/admin" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;