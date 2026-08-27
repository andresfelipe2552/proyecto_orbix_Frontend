import "./Advertencia.css"
import { TriangleAlert } from "lucide-react";

const Advertencia = () =>{
    return (
        <div className="advertencia">
            <div className="advertencia-logo">
                <TriangleAlert size={22} />
            </div>
            <p className="advertencia-parrafo"><span>3 productos</span> estan por debajo de stock minimo recomendado.</p>
        </div>
    );
};
export default Advertencia;