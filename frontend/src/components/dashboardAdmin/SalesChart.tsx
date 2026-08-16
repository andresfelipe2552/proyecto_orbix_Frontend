import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const datos = [
  { mes: "Ene", ventas: 120000 },
  { mes: "Feb", ventas: 180000 },
  { mes: "Mar", ventas: 150000 },
  { mes: "Abr", ventas: 220000 },
  { mes: "May", ventas: 190000 },
  { mes: "Jun", ventas: 250000 },
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={datos}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="mes" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="ventas"
          stroke="#537cd6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
