import "./CardsVentas.css";

const CardsVentas = () => {
  return (
    <section className="cards-ventas">

      <div className="card-venta">
        <div className="card-venta-titulo">
          <span className="punto-verde"></span>
          <span>Total confirmado</span>
        </div>

        <h3>$ 47.160</h3>
      </div>

      <div className="card-venta">
        <div className="card-venta-titulo">
          <span className="punto-azul"></span>
          <span>En proceso</span>
        </div>

        <h3>$ 3.200</h3>
      </div>

      <div className="card-venta">
        <div className="card-venta-titulo">
          <span className="punto-naranja"></span>
          <span>Pendiente</span>
        </div>

        <h3>$ 5.900</h3>
      </div>

      <div className="card-venta">
        <div className="card-venta-titulo">
          <span className="punto-rojo"></span>
          <span>Cancelado</span>
        </div>

        <h3>$ 2.750</h3>
      </div>

    </section>
  );
};

export default CardsVentas;