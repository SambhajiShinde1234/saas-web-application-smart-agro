/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const DoubleLineChart = ({
  graphData,
  xAxisDataKey,
  lineFirstDataKey,
  lineSecondDataKey,
  lineFirstFillColor,
  lineSecondFillColor,
  legendIconType = 'circle',
  activeDotRadius = 7,
  strokeWidth = 2,
  top = 20,
  right = -20,
  left = -30,
  bottom = 5,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={graphData}
        margin={{
          top: top,
          right: right,
          left: left,
          bottom: bottom,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis yAxisId="left" orientation="left" stroke={lineFirstFillColor} />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke={lineSecondFillColor}
        />
        <Tooltip />
        <Legend iconType={legendIconType} />
        <Line
          type="monotone"
          dataKey={lineFirstDataKey}
          stroke={lineFirstFillColor}
          activeDot={{ r: activeDotRadius }}
          yAxisId="left"
          strokeWidth={strokeWidth}
        />
        <Line
          type="monotone"
          dataKey={lineSecondDataKey}
          stroke={lineSecondFillColor}
          activeDot={{ r: activeDotRadius }}
          yAxisId="right"
          strokeWidth={strokeWidth}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DoubleLineChart;
