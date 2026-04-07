import { Line } from "react-chartjs-2"

function ProductivityChart({ labels, laborProductivity }: { labels: string[]; laborProductivity: number }) {

    return (
        <div className="chart-container">
            <div className="chart-supertitle">ECONOMIC OUTPUT</div>
            <div className="chart-header">
                <div className="chart-title">Productivity per Worker</div>
                <div className="chart-subtitle">Labour productivity in USD (PPP adjusted)</div>
            </div>
            <div className="chart-body">
            <Line
                key={JSON.stringify(laborProductivity)}
                datasetIdKey="productivity-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Labor Productivity',
                            data: laborProductivity,
                            backgroundColor: "#1982c4",
                            borderColor: "#1982c4"
                        },

                    ],
                }}
                options={{
                    elements: {
                        point: {
                            hoverRadius: 10,
                            hitRadius: 40,
                            hoverBorderWidth: 10
                        }
                    }, plugins: {
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
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
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

export default ProductivityChart
