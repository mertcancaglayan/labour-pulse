import { useEffect, useState } from "react"
import { getData } from "../../services/getRawData"
import type { TransformedDataI } from "../../services/transformer"
import {
    defaults,
} from "chart.js"
import { Line } from "react-chartjs-2"


defaults.maintainAspectRatio = false
defaults.responsive = true

function InflationChart() {
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

    if (isLoading) {
        return (
            <div style={{ background: 'var(--bg)', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>LOADING DATA...</h2>
            </div>
        )
    }

    const labels = Object.keys(data)
    const inflationValues = Object.values(data).map(
        (item) => Math.trunc(item["Headline Inflation (CPI)"])
    )

    return (
        <div>
            <Line
                key={JSON.stringify(data)}
                datasetIdKey="kpi-id"
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Inflation by Year',
                            data: inflationValues,
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
                    }
                }}
            >


            </Line>
        </div>
    )
}

export default InflationChart
