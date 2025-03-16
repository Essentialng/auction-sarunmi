"use client";

import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { date: "June 1", thisMonth: 40, lastMonth: 20 },
  { date: "June 2", thisMonth: 60, lastMonth: 50 },
  { date: "June 3", thisMonth: 90, lastMonth: 70 },
  { date: "June 4", thisMonth: 120, lastMonth: 100 },
  { date: "June 5", thisMonth: 80, lastMonth: 90 },
  { date: "June 6", thisMonth: 110, lastMonth: 120 },
  { date: "June 7", thisMonth: 130, lastMonth: 140 },
];

export default function TrafficOverviewChart() {
  return (
    <div className="py-4  bg-[#F7F9FB] rounded-xl">
      <div className="flex items-center gap-6 px-8">
        <h2 className="">Traffic Overview</h2>
        <h2 className="">Traffic Overview</h2>
        <small>This Month</small>
        <small>Last Month</small>
      </div>
      <LineChart
        width={630}
        height={300}
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
      >
        <XAxis dataKey="date" axisLine={false} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          formatter={() => null}
        />
        <Line
          type="monotone"
          dataKey="thisMonth"
          stroke="#000000"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="lastMonth"
          stroke="#7FB3D5"
          strokeWidth={2}
          dot={false}
          strokeDasharray="3 3"
        />
      </LineChart>
    </div>
  );
}
