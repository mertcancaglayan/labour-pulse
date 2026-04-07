import InflationChart from "./charts/InflationChart";
import UnemploymentChart from "./charts/UnemploymentChart";
import LabourParticipationChart from "./charts/LabourParticipationChart";
import ProductivityChart from "./charts/ProductivityChart";
import LabourCompositionChart from "./charts/LabourCompositionChart";
import { useCountryData } from "../../hooks/useCountryData";

function ChartsGrid() {
    const { countryData } = useCountryData();

    if (!countryData) {
        return (
            <div
                style={{
                    background: "var(--bg)",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2 style={{ fontFamily: "Bebas Neue", letterSpacing: "2px" }}>
                    LOADING DATA...
                </h2>
            </div>
        );
    }

    const stringLabels = countryData.labels;

    return (
        <div className="charts-grid">
            <div className="chart-grid">
                <InflationChart
                    labels={stringLabels}
                    inflation={countryData.inflation}
                />

                <UnemploymentChart
                    labels={stringLabels}
                    totalUnemployment={countryData.totalUnemployment}
                    youthUnemployment={countryData.youthUnemployment}
                    graduateUnemployment={countryData.graduateUnemployment}
                />

                <LabourParticipationChart
                    labels={stringLabels}
                    laborParticipation={countryData.laborParticipation}
                />

                <ProductivityChart
                    labels={stringLabels}
                    laborProductivity={countryData.laborProductivity}
                />

                <LabourCompositionChart
                    labels={stringLabels}
                    servicesSector={countryData.servicesSector}
                    industrySector={countryData.industrySector}
                    agricultureSector={countryData.agricultureSector}
                />
            </div>
        </div>
    );
}

export default ChartsGrid;