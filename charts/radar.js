import React, {PureComponent} from "../_snowpack/pkg/react.js";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from "../_snowpack/pkg/recharts.js";
import {getColor} from "./colors.js";
export default class Example extends PureComponent {
  render() {
    const {data, labels} = this.props;
    return /* @__PURE__ */ React.createElement(RadarChart, {
      cx: 300,
      cy: 250,
      outerRadius: 150,
      width: 500,
      height: 500,
      data
    }, /* @__PURE__ */ React.createElement(PolarGrid, null), /* @__PURE__ */ React.createElement(PolarAngleAxis, {
      dataKey: "name"
    }), /* @__PURE__ */ React.createElement(PolarRadiusAxis, null), labels.map((l, i) => {
      return /* @__PURE__ */ React.createElement(Radar, {
        key: i,
        name: l,
        dataKey: l,
        stroke: getColor(i),
        fill: getColor(i),
        fillOpacity: 0.6
      });
    }), /* @__PURE__ */ React.createElement(Legend, null));
  }
}
