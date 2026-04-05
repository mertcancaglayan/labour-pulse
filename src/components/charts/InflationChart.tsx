import {
    defaults,
} from "chart.js"
import { Line } from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true

function InflationChart({ labels, inflation }: { labels: string[]; inflation: number[] }) {

    return (
        <div>
            <Line
                key={JSON.stringify(inflation)}
                datasetIdKey="kpi-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Inflation by Year',
                            data: inflation,
                            backgroundColor: "#865b0f",
                            borderColor: "#865b0f"
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
    )
}

export default InflationChart
