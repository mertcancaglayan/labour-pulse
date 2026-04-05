import {
    defaults,
} from "chart.js"
import { Line } from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true

function InflationChart({ labels, inflation }: { labels: string[]; inflation: number[] }) {

    return (
        <div className="chart-container">
            <div className="chart-supertitle">PRICE DYNAMICS</div>
            <div className="chart-header">
                <div className="chart-title">Inflation Rollercoaster</div>
                <div className="chart-subtitle">CPI Headline Rate 1990-2024 (log scale)</div>
            </div>
            <div className="chart-body">
            <Line
                key={JSON.stringify(inflation)}
                datasetIdKey="kpi-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Inflation by Year',
                            data: inflation,
                            backgroundColor: "#c7522a",
                            borderColor: "#c7522a"
                        },

                    ],
                }}
                options={{
                    elements: {
                        point: {
                            hoverRadius: 20
                        }
                    },
                    plugins: {
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';

                                    if (label) {
                                        label += ': ';
                                    }

                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', {
                                            style: 'percent',
                                            maximumFractionDigits: 1
                                        }).format(context.parsed.y / 100);
                                    }

                                    return label;
                                }
                            }
                        }
                    }
                }}
            >


            </Line>
            </div>
        </div>
    )
}

export default InflationChart
