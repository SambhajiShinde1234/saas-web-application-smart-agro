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

const SingleBarChart = ({
  graphData,
  xAxisDataKey,
  barDataKey,
  barFillColor = '#82ca9d',
  legendIconType = 'circle',
  top = 20,
  right = -20,
  left = -30,
  bottom = 5,
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
        <XAxis dataKey={xAxisDataKey} />
        <YAxis stroke={barFillColor} />
        <Tooltip />
        <Legend iconType={legendIconType} />
        <Bar dataKey={barDataKey} fill={barFillColor} radius={[50, 50, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SingleBarChart;
