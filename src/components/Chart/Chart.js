import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const listExpensesAmounth = props.dataPoints.map((x) => x.value);
  const totalMaximum = Math.max(...listExpensesAmounth);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
