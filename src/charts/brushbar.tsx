import React from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getColor } from "./colors";

export default ({ data, labels }: { data: any; labels: any }) => {
  //static jsfiddleUrl= 'https://jsfiddle.net/alidingling/mc8r7e6p/';

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <ReferenceLine y={0} stroke="#000" />
      <Brush dataKey="name" height={30} stroke="#8884d8" />

      {labels.map((l, i) => {
        return <Bar key={i} dataKey={l} fill={getColor(i)} />;
      })}
      <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
    </BarChart>
  );
};
