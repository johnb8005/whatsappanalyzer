import React from "../_snowpack/pkg/react.js";
import * as U from "./utils.js";
import * as UI from "./utils-ui.js";
export default ({data}) => {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "pull-right"
  }, "from ", U.formatDateAndTime(total.firstTime), " until", " ", U.formatDateAndTime(total.lastTime)), /* @__PURE__ */ React.createElement("h2", null, "Totals"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, UI.renderVizBox("# messages", total.n)), /* @__PURE__ */ React.createElement("li", null, UI.renderVizBox("# days", total.nDays)), /* @__PURE__ */ React.createElement("li", null, UI.renderVizBox("# words", total.nWords)), /* @__PURE__ */ React.createElement("li", null, UI.renderVizBox("# characters", total.nChars))), UI.renderBarChart(senders.all), UI.renderRadar(senders.times, labels), UI.renderPieChart(senders.all), UI.renderBrushBarChart(senders.days, labels));
};
