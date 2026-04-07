import { Line } from "react-chartjs-2"

function LabourParticipationChart({ labels, laborParticipation }: { labels: string[]; laborParticipation: number }) {

    return (
        <div className="chart-container">
            <div className="chart-supertitle">STRUCTURAL INDICATORS</div>
            <div className="chart-header">
                <div className="chart-title">Labour Force Participation</div>
                <div className="chart-subtitle">Active workforce as percentage of working-age population</div>
            </div>
            <div className="chart-body">
            <Line
                key={JSON.stringify(laborParticipation)}
                datasetIdKey="lab-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Labor Participation Rate',
                            data: laborParticipation,
                            backgroundColor: "#6a4c93",
                            borderColor: "#6a4c93"
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

export default LabourParticipationChart
