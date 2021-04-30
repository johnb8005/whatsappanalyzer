import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

import { getColor } from "./colors";

export default ({ data }: any) => {
  // onMouseEnter={this.onPieEnter} ... lst whille migrating
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getColor(index)} label />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};
