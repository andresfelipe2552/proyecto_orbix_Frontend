import { useState } from "react";

import "./InventarioAdmin.css";

import Sidebar from "../../../components/dashboardAdmin/Sidebar";

import { Search, Bell, Plus } from "lucide-react";


import BuscarProductos from "../../../components/dashboardAdmin/InventarioAdmin/BuscarProductos";

import TablaProductos from "../../../components/dashboardAdmin/InventarioAdmin/TablaProductos";
import Advertencia from "../../../components/dashboardAdmin/InventarioAdmin/Advertencia";

const InventarioAdmin = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const [textoBusqueda, setTextoBusqueda] = useState("");

  const productos = [
    {
      codigo: "PRD-001",
      nombre: "Laptop Lenovo IdeaPad 5",
      categoria: "Electrónica",
      precio: "$ 8.450",
      stock: 14,
    },
    {
      codigo: "PRD-002",
      nombre: 'Monitor Samsung 27" FHD',
      categoria: "Electrónica",
      precio: "$ 3.200",
      stock: 8,
    },
    {
      codigo: "PRD-003",
      nombre: "Zapatillas Nike Air Max 270",
      categoria: "Ropa y calzado",
      precio: "$ 1.890",
      stock: 3,
    },
    {
      codigo: "PRD-004",
      nombre: "Set Utensilios Cocina 12pz",
      categoria: "Hogar",
      precio: "$ 4.620",
      stock: 22,
    },
    {
      codigo: "PRD-005",
      nombre: "Smartphone Samsung Galaxy",
      categoria: "Electrónica",
      precio: "$ 5.900",
      stock: 19,
    },
    {
      codigo: "PRD-006",
      nombre: "Impresora HP LaserJet Pro",
      categoria: "Electrónica",
      precio: "$ 2.750",
      stock: 2,
    },
    {
      codigo: "PRD-007",
      nombre: "Auriculares Sony WH-1000XM5",
      categoria: "Electrónica",
      precio: "$ 4.100",
      stock: 11,
    },
    {
      codigo: "PRD-008",
      nombre: "Remera Adidas Originals",
      categoria: "Ropa y calzado",
      precio: "$ 680",
      stock: 45,
    },
    {
      codigo: "PRD-009",
      nombre: "Horno Electrico Sindelen",
      categoria: "Hogar",
      precio: "$ 1.340",
      stock: 7,
    },
    {
      codigo: "PRD-010",
      nombre: "Arroz Largo Fino x5kg",
      categoria: "Alimentos",
      precio: "$ 320",
      stock: 88,
    },
    {
      codigo: "PRD-011",
      nombre: "Aceite de Oliva Extra Virgen",
      categoria: "Alimentos",
      precio: "$ 540",
      stock: 62,
    },
    {
      codigo: "PRD-012",
      nombre: "Teclado Mecánico Logitech",
      categoria: "Electrónica",
      precio: "$ 1.950",
      stock: 4,
    },
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "Todas" ||
      producto.categoria === categoriaSeleccionada;

    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase());

    return coincideCategoria && coincideBusqueda;
  });

  return (
    <main className="inventario-main">
      <Sidebar />

      <div className="inventario-contenido">
        <div className="inventario-barra-superior">
          <p>
            <span className="inventario-orbix">Orbix</span> /{" "}
            <span className="inventario-admin">Admin</span> /{" "}
            <span className="inventario-titulo">Inventario</span>
          </p>

          <div className="inventario-acciones-superiores">
            <form className="inventario-buscar">
              <Search size={20} />
              <input type="text" placeholder="Buscar..." />
            </form>

            <div className="inventario-notifi">
              <Bell size={20} />
            </div>

            <div className="inventario-usuario">VO</div>
          </div>
        </div>

        <div className="inventario-encabezado">
          <div>
            <h2>Inventario</h2>

            <p className="inventario-fecha">12 productos 3 con stock bajo</p>
          </div>

          <button className="inventario-button-agregar">
            <Plus size={20} />
            Agregar producto
          </button>
        </div>

        <Advertencia />

        <BuscarProductos
          categoriaSeleccionada={categoriaSeleccionada}
          onCategoriaChange={setCategoriaSeleccionada}
          textoBusqueda={textoBusqueda}
          onBusquedaChange={setTextoBusqueda}
        />

        <TablaProductos productos={productosFiltrados} />
      </div>
    </main>
  );
};

export default InventarioAdmin;
