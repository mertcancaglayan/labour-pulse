import { useState, type ReactNode } from "react";
import { CountryDataContext } from "./CountryDataContext";
import { useData } from "../hooks/useData";

export interface DataSetsI {
    labels: string[];

    totalUnemployment: number[];
    youthUnemployment: number[];
    graduateUnemployment: number[];
    laborParticipation: number[];

    servicesSector: number[];
    industrySector: number[];
    agricultureSector: number[];

    manufacturingOutput: number[];
    inflation: number[];
    laborProductivity: number[];
}

export function CountryDataProvider({ children }: { children: ReactNode }) {
    const [country, setCountry] = useState("tr");

    const rawData = useData(country);

    const countryData: DataSetsI = {
        labels: rawData.labels,

        totalUnemployment: rawData.totalUnemployment,
        youthUnemployment: rawData.youthUnemployment,
        graduateUnemployment: rawData.graduateUnemployment,
        laborParticipation: rawData.laborParticipation,

        servicesSector: rawData.servicesSector,
        industrySector: rawData.industrySector,
        agricultureSector: rawData.agricultureSector,

        manufacturingOutput: rawData.manufacturingOutput,
        inflation: rawData.inflation,
        laborProductivity: rawData.laborProductivity,
    };

    const switchCountry = (selectedCountry: string) => {
        setCountry(selectedCountry);
    };

    return (
        <CountryDataContext.Provider value={{ country, switchCountry, countryData }}>
            {children}
        </CountryDataContext.Provider>
    );
}