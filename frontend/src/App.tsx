import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";

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
        <Route path="/login/admin" element={<LoginAdmin />} />

        <Route path="/login/opera" element={<LoginOpera />} />

        {/* Dashboards */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/cajero"
          element={
            <ProtectedRoute roles={["vendedor"]}>
              <DashboardCajero />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/inventario"
          element={
            <ProtectedRoute roles={["inventario"]}>
              <DashboardInventario />
            </ProtectedRoute>
          }
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
