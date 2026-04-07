import { useState, type ReactNode } from "react";
import { CountryDataContext } from "./CountryDataContext";
import { useData } from "../hooks/useData";

export function CountryDataProvider({ children }: { children: ReactNode }) {
    const [country, setCountry] = useState("tr");

    const countryData = useData(country);

    const switchCountry = (selectedCountry: string) => {
        setCountry(selectedCountry);
    };

    return (
        <CountryDataContext.Provider value={{ country, switchCountry, countryData }}>
            {children}
        </CountryDataContext.Provider>
    );
}