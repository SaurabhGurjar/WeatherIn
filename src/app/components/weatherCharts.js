import { Chart } from "chart.js/auto";

export default function makeChart(temps, hours, chartLabel) {
  const ctx = document.createElement("canvas");
  const chartWrapper = document.createElement("div");
  chartWrapper.id = "chart";
  ctx.id = "hourly-weather-graph";
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: hours,
      datasets: [
        {
          label: chartLabel,
          data: temps,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.4,
        },
      ],
    },
  });
  chartWrapper.appendChild(ctx);
  return chartWrapper;
}
