import { useEffect, useState } from "react"
import type { TransformedDataI } from "../../services/transformer"
import { getData } from "../../services/getRawData"
import { Line } from "react-chartjs-2"

function ProductivityChart() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<Record<number, TransformedDataI>>({})

    useEffect(() => {
        const init = async () => {
            try {
                const result = await getData()
                setData(result)
            } catch (error) {
                console.error("Initialization failed", error)
            } finally {
                setIsLoading(false)
            }
        }

        init()
    }, [])

    const labels = Object.keys(data)
    const labourProductivity = Object.values(data).map(
        (item) => item["Labor Productivity (USD)"]
    )


    if (isLoading) {
        return (
            <div style={{ background: 'var(--bg)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>LOADING DATA...</h2>
            </div>
        )
    }
    return (
        <div>
            <Line
                key={JSON.stringify(data)}
                datasetIdKey="lab-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Labor Participation Rate',
                            data: labourProductivity,
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
