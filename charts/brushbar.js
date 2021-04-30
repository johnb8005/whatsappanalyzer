import React from "../_snowpack/pkg/react.js";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "../_snowpack/pkg/recharts.js";
import {getColor} from "./colors.js";
export default ({data, labels}) => {
  return /* @__PURE__ */ React.createElement(BarChart, {
    width: 500,
    height: 300,
    data,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }, /* @__PURE__ */ React.createElement(CartesianGrid, {
    strokeDasharray: "3 3"
  }), /* @__PURE__ */ React.createElement(XAxis, {
    dataKey: "name"
  }), /* @__PURE__ */ React.createElement(YAxis, null), /* @__PURE__ */ React.createElement(Tooltip, null), /* @__PURE__ */ React.createElement(ReferenceLine, {
    y: 0,
    stroke: "#000"
  }), /* @__PURE__ */ React.createElement(Brush, {
    dataKey: "name",
    height: 30,
    stroke: "#8884d8"
  }), labels.map((l, i) => {
    return /* @__PURE__ */ React.createElement(Bar, {
      key: i,
      dataKey: l,
      fill: getColor(i)
    });
  }), /* @__PURE__ */ React.createElement(Legend, {
    verticalAlign: "top",
    wrapperStyle: {lineHeight: "40px"}
  }));
};
