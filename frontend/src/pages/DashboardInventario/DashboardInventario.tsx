import { Search, Bell } from "lucide-react";
import SidebarInventario from "../../components/dashboardInventario/SidebarInventario";
import CardsInventario from "../../components/dashboardInventario/CardsInventario";
import StockBajoTable from "../../components/dashboardInventario/StockBajoTable";
import StockChart from "../../components/dashboardInventario/StockChart";
import UltimosMovimientos from "../../components/dashboardInventario/UltimosMovimientos";

import "./DashboardInventario.css";

const DashboardInventario = () => {
  return (
    <main className="main-inv">
      <SidebarInventario />

      <div className="contenido-dashboard-inv">
        <div className="barra-superior-inv">
          <p className="breadcrumbs-inv">
            <span className="bread-orbix">Orbix</span> <span className="bread-sep">/</span>{" "}
            <span className="bread-inventario">Inventario</span> <span className="bread-sep">/</span>{" "}
            <span className="bread-dashboard">Dashboard</span>
          </p>

          <div className="acciones-superiores-inv">
            <form className="buscar-inv">
              <Search size={18} />
              <input type="text" placeholder="Buscar..." />
            </form>
            <div className="notifi-inv">
              <Bell size={20} />
            </div>
            <div className="usuario-inv">LH</div>
          </div>
        </div>

        <div className="panel-scroll-inv">
          <div className="encabezado-dashboard-inv">
            <h2>Dashboard de Inventario</h2>
            <p className="fecha-mes-inv">Estado general del stock · 30 de julio de 2026</p>
          </div>
          
          <div className="dashboard-content">
            <CardsInventario />
            <StockBajoTable />
            
            <div className="bottom-row-inv">
              <StockChart />
              <UltimosMovimientos />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardInventario;