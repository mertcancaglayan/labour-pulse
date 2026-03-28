import { useEffect, useState } from "react"
import type { TransformedDataI } from "../../services/transformer"
import { getData } from "../../services/getRawData"
import { Line } from "react-chartjs-2"

function UnemploymentChart() {
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
    const totalUnemploymentValues = Object.values(data).map(
        (item) => Math.trunc(item["Total Unemployment"])
    )
    const youthUnemployment = Object.values(data).map((item) => Math.trunc(item["Youth Unemployment"]))

    const graduateUnemployment = Object.values(data).map((item) => Math.trunc(item["Graduate Unemployment"]))

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
                datasetIdKey="Unp-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total Unemployment',
                            data: totalUnemploymentValues,
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
