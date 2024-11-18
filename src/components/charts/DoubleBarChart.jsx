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
const DoubleBarChart = ({
  graphData,
  xAxisDataKey,
  barLeftDataKey,
  barRightDataKey,
  barLeftFillColor = '#82ca9d',
  barRightFillColor = '#82ca9d',
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
        <YAxis yAxisId="left" orientation="left" stroke={barLeftFillColor} />
        <YAxis yAxisId="right" orientation="right" stroke={barRightFillColor} />
        <Tooltip />
        <Legend iconType={legendIconType} />
        <Bar
          dataKey={barLeftDataKey}
          yAxisId="left"
          fill={barLeftFillColor}
          radius={[50, 50, 0, 0]}
        />
        <Bar
          dataKey={barRightDataKey}
          yAxisId="right"
          fill={barRightFillColor}
          radius={[50, 50, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DoubleBarChart;
