import { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useCommunication } from "../../hooks/useCommunication";

const Analytics = () => {
  const { communications } = useCommunication();

  const stats = useMemo(() => {
    const call = communications.filter((c) => c.type === "Call").length;
    const text = communications.filter((c) => c.type === "Text").length;
    const video = communications.filter((c) => c.type === "Video").length;

    return [
      { name: "Call", value: call, color: "#7537f5" },
      { name: "Text", value: text, color: "#37a163" },
      { name: "Video", value: video, color: "#244d3f" },
    ];
  }, [communications]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* TITLE */}
      <h1 className="text-3xl font-bold">Friendship analytics</h1>

      {/* CARD */}
      <div className="border rounded-xl p-6 space-y-6">
        {/* CARD TITLE */}
        <h2 className="text-lg font-semibold text-left">By Interaction Type</h2>

        {/* CHART */}
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={stats}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={60}
              paddingAngle={3}
            >
              {stats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip formatter={(value, name) => [`${name}: ${value}`]} />
          </PieChart>
        </div>

        {/* CUSTOM LEGEND (RESPONSIVE CENTER FIX) */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {stats.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
