import { Search } from "lucide-react";

import "./FiltrosVentas.css";

interface FiltrosVentasProps {
  filtro: string;
  setFiltro: (filtro: string) => void;
  busqueda: string;
  setBusqueda: (busqueda: string) => void;
}

const FiltrosVentas = ({
  filtro,
  setFiltro,
  busqueda,
  setBusqueda,
}: FiltrosVentasProps) => {
  const filtros = [
    "Todos",
    "Completada",
    "En proceso",
    "Pendiente",
    "Cancelada",
  ];

  return (
    <section className="filtros-ventas">
      <div className="filtros-ventas-contenido">
        <form className="buscar-ventas">
          <Search size={21} />

          <input
            type="text"
            placeholder="Buscar por pedido o cliente"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </form>

        <div className="botones-filtros-ventas">
          {filtros.map((nombreFiltro) => (
            <button
              key={nombreFiltro}
              className={filtro === nombreFiltro ? "filtro-venta-activo" : ""}
              onClick={() => setFiltro(nombreFiltro)}
            >
              {nombreFiltro}
            </button>
          ))}
        </div>
      </div>

      <p className="ventas-resultados">
        10 resultados · $ 47.160 confirmado (7 órd.)
      </p>
    </section>
  );
};

export default FiltrosVentas;
