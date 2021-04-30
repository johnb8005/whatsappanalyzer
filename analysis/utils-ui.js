import React from "../_snowpack/pkg/react.js";
import BarChart from "../charts/barchart.js";
import RadarChart from "../charts/radar.js";
import PieChart from "../charts/pie.js";
import BrushBarChart from "../charts/brushbar.js";
import * as U from "./utils.js";
export const renderBarChart = (objMap) => {
  const r = Object.keys(objMap).map((k) => {
    return {name: k, value: objMap[k]};
  });
  return /* @__PURE__ */ React.createElement(BarChart, {
    data: r
  });
};
export const renderRadar = (data, labels) => {
  const r = Object.keys(data).map((idx) => {
    return {name: idx, ...data[idx]};
  });
  return /* @__PURE__ */ React.createElement(RadarChart, {
    data: r,
    labels
  });
};
export const renderPieChart = (objMap) => {
  const r = Object.keys(objMap).map((k) => ({name: k, value: objMap[k]}));
  return /* @__PURE__ */ React.createElement(PieChart, {
    data: r
  });
};
export const renderBrushBarChart = (objMap, labels) => {
  const rt = U.transpose(objMap, (a) => a.messages);
  const r = Object.keys(rt).map((k) => ({
    name: k,
    ...rt[k]
  }));
  return /* @__PURE__ */ React.createElement(BrushBarChart, {
    data: r,
    labels
  });
};
export const renderVizBox = (label, value) => /* @__PURE__ */ React.createElement("div", null, label, ": ", U.formatNumber(value));
