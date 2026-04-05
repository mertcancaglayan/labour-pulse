import { Line } from "react-chartjs-2"

function ProductivityChart({ labels, laborProductivity }: { labels: string[]; laborProductivity: number[] }) {

    return (
        <div>
            <Line
                key={JSON.stringify(laborProductivity)}
                datasetIdKey="lab-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Labor Productivity',
                            data: laborProductivity,
                            backgroundColor: "#534d41",
                            borderColor: "#423f38"
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
    )
}

export default ProductivityChart
