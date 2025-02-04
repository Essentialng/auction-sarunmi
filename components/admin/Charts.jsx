import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Auctions", value: 35, color: "#6A5ACD" },
  { name: "Subscription", value: 45, color: "#3CB371" },
  { name: "Others", value: 20, color: "#FF7F50" },
];

const DonutChart = () => {
  const totalUsers = 10000;

  return (
    <div style={{ textAlign: "center" }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={70}
          dataKey="value"
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "10px"}}
        >
          {totalUsers.toLocaleString()} Users
        </text>
        
      </PieChart>
    </div>
  );
};

export default DonutChart;
