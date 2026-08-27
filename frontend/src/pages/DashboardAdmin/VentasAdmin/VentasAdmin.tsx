import { Search, Bell, Plus } from "lucide-react";
import Sidebar from "../../../components/dashboardAdmin/Sidebar";
import "./VentasAdmin.css";
import CardsVentas from "../../../components/dashboardAdmin/VentasAdmin/CardsVentas";
import FiltrosVentas from "../../../components/dashboardAdmin/VentasAdmin/FiltrosVentas";
import TablaVentas from "../../../components/dashboardAdmin/VentasAdmin/TablaVentas";
import { useState } from "react";
const VentasAdmin = () => {
  const [filtro, setFiltro] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  return (
    <main className="ventas-main">
      <Sidebar />
      <div className="ventas-contenido">
        <div className="ventas-barra-superior">
          <p>
            <span className="ventas-orbix">Orbix</span> /{" "}
            <span className="ventas-admin">Admin</span> /{" "}
            <span className="ventas-titulo">Ventas</span>
          </p>

          <div className="ventas-acciones-superiores">
            <form className="ventas-buscar">
              <Search size={20} />
              <input type="text" placeholder="Buscar..." />
            </form>

            <div className="ventas-notifi">
              <Bell size={20} />
            </div>

            <div className="ventas-usuario">VO</div>
          </div>
        </div>

        <div className="ventas-encabezado">
          <div>
            <h2>Ventas</h2>

            <p className="ventas-fecha">
              10 órdenes registradas · $ 59.010 en total
            </p>
          </div>

          <button className="ventas-button-agregar">
            <Plus size={20} />
            Nueva venta
          </button>
        </div>
        <CardsVentas />

        <FiltrosVentas
          filtro={filtro}
          setFiltro={setFiltro}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <TablaVentas filtro={filtro} busqueda={busqueda} />
      </div>
    </main>
  );
};

export default VentasAdmin;
