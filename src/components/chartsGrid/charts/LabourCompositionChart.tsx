import {  Line } from "react-chartjs-2";

interface LabourCompositionChartProps {
    labels: string[];
    servicesSector: number[];
    industrySector: number[];
    agricultureSector: number[];
}

function LabourCompositionChart({ labels, servicesSector, industrySector, agricultureSector }: LabourCompositionChartProps) {
    return (
        <div className="chart-container bar-chart-container">
            <div className="chart-supertitle">LABOUR MARKET</div>
            <div className="chart-header">
                <div className="chart-title">Labour Force Composition by Sector</div>
                <div className="chart-subtitle">Services · Industry · Agriculture sectors, 1991–2025</div>
            </div>
            <div className="chart-body">
                <Line

                    key={JSON.stringify(labels)}
                    datasetIdKey="LabComp-id"
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: 'Services Sector',
                                data: servicesSector,
                                backgroundColor: "#c25339",
                                borderColor: "#c25339",
                            }, {
                                label: 'Industry Sector',
                                data: industrySector,
                                backgroundColor: "#2a3b5c",
                                borderColor: "#2a3b5c",
                            }, {
                                label: 'Agriculture Sector',
                                data: agricultureSector,
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

export default LabourCompositionChart
