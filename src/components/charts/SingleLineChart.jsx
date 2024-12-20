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
import DxChartTooltip from '../ui/DxChartTooltip';

const SingleLineChart = ({
  graphData,
  xAxisDataKey,
  lineDataKey,
  lineFillColor,
  legendIconType = 'circle',
  activeDotRadius = 7,
  strokeWidth = 2,
  top = 20,
  right = -20,
  left = -30,
  bottom = 5,
  fontSize = '0.7rem',
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
        <XAxis dataKey={xAxisDataKey} style={{ fontSize: `${fontSize}` }} />
        <YAxis stroke={lineFillColor} style={{ fontSize: `${fontSize}` }} />
        <Tooltip content={<DxChartTooltip />} />
        <Legend iconType={legendIconType} />
        <Line
          type="monotone"
          dataKey={lineDataKey}
          stroke={lineFillColor}
          activeDot={{ r: activeDotRadius }}
          strokeWidth={strokeWidth}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SingleLineChart;
