import { Line } from "react-chartjs-2"

interface UnemploymentChartProps {
    labels: string[];
    totalUnemployment: number[];
    youthUnemployment: number[];
    graduateUnemployment: number[];
}

function UnemploymentChart({ labels, totalUnemployment, youthUnemployment, graduateUnemployment }: UnemploymentChartProps) {

    return (
        <div>
            <Line
                key={JSON.stringify(labels)}
                datasetIdKey="Unp-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Unemployment',
                            data: totalUnemployment,
                            backgroundColor: "#534d41",
                            borderColor: "#423f38",
                        }, {
                            label: 'Youth Unemployment',
                            data: youthUnemployment,
                            backgroundColor: "#0c7a24",
                            borderColor: "#0c7a24",
                        }, {
                            label: 'Graduate Unemployment',
                            data: graduateUnemployment,
                            backgroundColor: "#0e0c7a",
                            borderColor: "#0e0c7a",
                        },
                    ],
                }}
                options={{
                    elements: {
                        point: {
                            hoverRadius: 10,
                            hitRadius: 10,
                            hoverBorderWidth: 10
                        }

                    }
                    ,
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

export default UnemploymentChart
