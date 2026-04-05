import { Line } from "react-chartjs-2"

function LabourParticipationChart({ labels, laborParticipation }: { labels: string[]; laborParticipation: number[] }) {

    return (
        <div>
            <Line
                key={JSON.stringify(laborParticipation)}
                datasetIdKey="lab-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Labor Participation Rate',
                            data: laborParticipation,
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

export default LabourParticipationChart
