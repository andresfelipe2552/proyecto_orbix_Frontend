import "./TablaProductos.css";

interface Producto {
  codigo: string;
  nombre: string;
  categoria: string;
  precio: string;
  stock: number;
}

interface TablaProductosProps {
  productos: Producto[];
}

const TablaProductos = ({ productos }: TablaProductosProps) => {
  return (
    <div className="tabla-productos">
      <div className="tabla-productos-encabezado">
        <span>CÓDIGO</span>
        <span>PRODUCTO</span>
        <span>CATEGORÍA</span>
        <span>PRECIO UNIT.</span>
        <span>STOCK ACTUAL</span>
      </div>

      {productos.map((producto) => (
        <div className="tabla-productos-fila" key={producto.codigo}>
          <span className="producto-codigo">{producto.codigo}</span>

          <span className="producto-nombre">{producto.nombre}</span>

          <span className="producto-categoria">{producto.categoria}</span>

          <span className="producto-precio">{producto.precio}</span>

          <span
            className={
              producto.stock <= 4
                ? "producto-stock stock-bajo"
                : "producto-stock"
            }
          >
            {producto.stock}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TablaProductos;