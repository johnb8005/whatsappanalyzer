import React from "react";

import * as U from "./utils";
import * as UI from "./utils-ui";

export default ({ data }: { data: string }) => {
  const lines = data.split("\n");

  const content = U.getContent(lines);
  console.log(content);
  if (content.length === 0) {
    throw Error("could not parse file");
  }
  const senders = U.getSenders(content);
  console.log(senders);
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
        <li>{UI.renderVizBox("# messages", total.n)}</li>
        <li>{UI.renderVizBox("# days", total.nDays)}</li>
        <li>{UI.renderVizBox("# words", total.nWords)}</li>
        <li>{UI.renderVizBox("# characters", total.nChars)}</li>
      </ul>

      {UI.renderBarChart(senders.all)}
      {UI.renderRadar(senders.times, labels)}
      {UI.renderPieChart(senders.all)}
      {UI.renderBrushBarChart(senders.days, labels)}
    </div>
  );
};
