import "./CardsInventario.css";

const CardsInventario = () => {
  return (
    <div className="cards-inv-container">
      <div className="card-inv">
        <div className="card-inv-header">
          <p>Valor total de stock</p>
          <span className="dot-green"></span>
        </div>
        <h3 className="card-inv-value">$ 523.330</h3>
        <p className="card-inv-subtitle green-text">12 productos</p>
      </div>

      <div className="card-inv">
        <div className="card-inv-header">
          <p>Productos con stock bajo</p>
          <span className="dot-yellow"></span>
        </div>
        <h3 className="card-inv-value">3</h3>
        <p className="card-inv-subtitle yellow-text">requieren reposición</p>
      </div>

      <div className="card-inv">
        <div className="card-inv-header">
          <p>Sin stock</p>
          <span className="dot-red"></span>
        </div>
        <h3 className="card-inv-value">0</h3>
        <p className="card-inv-subtitle red-text">productos agotados</p>
      </div>

      <div className="card-inv">
        <div className="card-inv-header">
          <p>Movimientos hoy</p>
          <span className="dot-blue"></span>
        </div>
        <h3 className="card-inv-value">7</h3>
        <p className="card-inv-subtitle blue-text">4 entradas · 3 salidas</p>
      </div>
    </div>
  );
};

export default CardsInventario;
