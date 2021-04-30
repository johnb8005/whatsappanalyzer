import React from "../_snowpack/pkg/react.js";
import {PieChart, Pie, Cell, Legend} from "../_snowpack/pkg/recharts.js";
import {getColor} from "./colors.js";
export default ({data}) => {
  return /* @__PURE__ */ React.createElement(PieChart, {
    width: 800,
    height: 400
  }, /* @__PURE__ */ React.createElement(Pie, {
    data,
    cx: 120,
    cy: 200,
    innerRadius: 60,
    outerRadius: 80,
    fill: "#8884d8",
    paddingAngle: 5,
    dataKey: "value",
    label: true
  }, data.map((entry, index) => /* @__PURE__ */ React.createElement(Cell, {
    key: `cell-${index}`,
    fill: getColor(index),
    label: true
  }))), /* @__PURE__ */ React.createElement(Legend, null));
};
