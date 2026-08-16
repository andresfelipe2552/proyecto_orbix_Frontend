import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const datos = [
  { categoria: "Electrónica", valor: 400 },
  { categoria: "Hogar", valor: 300 },
  { categoria: "Ropa", valor: 200 },
  { categoria: "Otros", valor: 100 },
];

const colores = ["#537cd6", "#6c8edb", "#8ba5e3", "#aec0eb"];

const CategoryChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={datos}
          dataKey="valor"
          nameKey="categoria"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={60}
        >
          {datos.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colores[index % colores.length]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryChart;
