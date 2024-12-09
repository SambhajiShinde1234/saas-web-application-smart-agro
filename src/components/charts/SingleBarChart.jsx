/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// import DxChartTooltip from '../ui/DxChartTooltip';

const SingleBarChart = ({
  graphData,
  xAxisDataKey,
  barDataKey,
  barFillColor = '#82ca9d',
  barActiveColor = '#3A6A3F',
  legendIconType = 'circle',
  top = 20,
  right = -20,
  left = -30,
  bottom = 5,
  fontSize = '0.7rem',
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={graphData}
        barSize={25}
        margin={{
          top: top,
          right: right,
          left: left,
          bottom: bottom,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} style={{ fontSize: `${fontSize}` }} />
        <YAxis stroke={barFillColor} style={{ fontSize: `${fontSize}` }} />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          // content={<DxChartTooltip />}
        />
        <Legend iconType={legendIconType} />
        <Bar
          dataKey={barDataKey}
          fill={barFillColor}
          activeBar={{ fill: barActiveColor }}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SingleBarChart;
