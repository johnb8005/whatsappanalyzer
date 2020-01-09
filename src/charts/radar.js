import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from 'recharts';

import { getColor } from './colors';

export default class Example extends PureComponent {
  render() {
    const { data, labels } = this.props;

    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        {labels.map((l, i) => {
          return <Radar key={i} name={l} dataKey={l} stroke={getColor(i)} fill={getColor(i)} fillOpacity={0.6} />
        })}
        <Legend/>
      </RadarChart>
    );
  }
}
