import { Line } from "react-chartjs-2"

interface UnemploymentChartProps {
    labels: string[];
    totalUnemployment: number;
    youthUnemployment: number;
    graduateUnemployment: number;
}

function UnemploymentChart({ labels, totalUnemployment, youthUnemployment, graduateUnemployment }: UnemploymentChartProps) {

    return (
        <div className="chart-container">
            <div className="chart-supertitle">LABOUR MARKET</div>
            <div className="chart-header">
                <div className="chart-title">Three Decades of Labour Strain</div>
                <div className="chart-subtitle">Total · Youth · Graduate unemployment rates, 1991–2025</div>
            </div>
            <div className="chart-body">
            <Line
                key={JSON.stringify(labels)}
                datasetIdKey="Unp-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Unemployment',
                            data: totalUnemployment,
                            backgroundColor: "#c25339",
                            borderColor: "#c25339",
                        }, {
                            label: 'Youth Unemployment',
                            data: youthUnemployment,
                            backgroundColor: "#2a3b5c",
                            borderColor: "#2a3b5c",
                        }, {
                            label: 'Graduate Unemployment',
                            data: graduateUnemployment,
                            backgroundColor: "#3c5e37",
                            borderColor: "#3c5e37",
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
        </div>
    )
}

export default UnemploymentChart
