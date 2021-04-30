import React from "react";

import BarChart from "../charts/barchart";
import RadarChart from "../charts/radar";
import PieChart from "../charts/pie";
import BrushBarChart from "../charts/brushbar";

import * as U from "./utils";

export default ({ data }) => {
  const renderBarChart = (objMap) => {
    // turn object into array (right format for barchart)
    const r = Object.keys(objMap).map((k) => {
      return { name: k, value: objMap[k] };
    });

    return <BarChart data={r} />;
  };

  const renderRadar = (data, labels) => {
    const r = Object.keys(data).map((idx) => {
      return { name: idx, ...data[idx] };
    });

    return <RadarChart data={r} labels={labels} />;
  };

  const renderPieChart = (objMap) => {
    // turn object into array (right format for barchart)
    const r = Object.keys(objMap).map((k) => {
      return { name: k, value: objMap[k] };
    });
    return <PieChart data={r} />;
  };

  const renderBrushBarChart = (objMap, labels) => {
    const rt = U.transpose(objMap, (a) => a.messages);
    const r = Object.keys(rt).map((k) => {
      return {
        name: k,
        ...rt[k],
      };
    });

    return <BrushBarChart data={r} labels={labels} />;
  };

  const renderVizBox = (label, value) => {
    return (
      <div>
        {label}: {U.formatNumber(value)}
      </div>
    );
  };

  const lines = data.split("\n");

  const content = U.getContent(lines);
  if (content.length === 0) {
    throw Error("could not parse file");
  }
  const senders = U.getSenders(content);
  const total = U.getTotals(content);

  const labels = Object.keys(senders.all);

  return (
    <div>
      <p className="pull-right">
        from {U.formatDateAndTime(total.firstTime)} until{" "}
        {U.formatDateAndTime(total.lastTime)}
      </p>
      <h2>Totals</h2>

      <ul>
        <li>{renderVizBox("# messages", total.n)}</li>
        <li>{renderVizBox("# days", total.nDays)}</li>
        <li>{renderVizBox("# words", total.nWords)}</li>
        <li>{renderVizBox("# characters", total.nChars)}</li>
      </ul>

      {renderBarChart(senders.all)}
      {renderRadar(senders.times, labels)}
      {renderPieChart(senders.all)}
      {renderBrushBarChart(senders.days, labels)}
    </div>
  );
};
