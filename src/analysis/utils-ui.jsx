import React from "react";

import BarChart from "../charts/barchart";
import RadarChart from "../charts/radar";
import PieChart from "../charts/pie";
import BrushBarChart from "../charts/brushbar";

import * as U from "./utils";

export const renderBarChart = (objMap) => {
  // turn object into array (right format for barchart)
  const r = Object.keys(objMap).map((k) => {
    return { name: k, value: objMap[k] };
  });

  return <BarChart data={r} />;
};

export const renderRadar = (data, labels) => {
  const r = Object.keys(data).map((idx) => {
    return { name: idx, ...data[idx] };
  });

  return <RadarChart data={r} labels={labels} />;
};

export const renderPieChart = (objMap) => {
  // turn object into array (right format for barchart)
  const r = Object.keys(objMap).map((k) => ({ name: k, value: objMap[k] }));

  return <PieChart data={r} />;
};

export const renderBrushBarChart = (objMap, labels) => {
  const rt = U.transpose(objMap, (a) => a.messages);
  const r = Object.keys(rt).map((k) => ({
    name: k,
    ...rt[k],
  }));

  return <BrushBarChart data={r} labels={labels} />;
};

export const renderVizBox = (label, value) => (
  <div>
    {label}: {U.formatNumber(value)}
  </div>
);