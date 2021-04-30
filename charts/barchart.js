import React from "../_snowpack/pkg/react.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "../_snowpack/pkg/recharts.js";
export default ({data}) => {
  if (!data) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  }
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
  }), /* @__PURE__ */ React.createElement(YAxis, null), /* @__PURE__ */ React.createElement(Tooltip, null), /* @__PURE__ */ React.createElement(Legend, null), /* @__PURE__ */ React.createElement(Bar, {
    dataKey: "value",
    fill: "#8884d8"
  }));
};
