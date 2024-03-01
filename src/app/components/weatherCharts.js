import { Chart } from "chart.js/auto";

export default function makeChart(temps, hours, chartLabel) {
  const canvas = document.createElement("canvas");
  const chartWrapper = document.createElement("div");
  chartWrapper.id = "chart";
  canvas.id = "hourly-weather-graph";
  const chart = new Chart(canvas, {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: chartLabel,
          data: temps,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.5,
        },
      ],
    },
  });
  chartWrapper.appendChild(chart.canvas);
  return chartWrapper;
}
