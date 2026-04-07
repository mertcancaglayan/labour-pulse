import { useContext } from "react";
import { CountryDataContext } from "../context/CountryDataContext";


export function useCountryData() {
	const context = useContext(CountryDataContext);

	if (!context) {
		throw new Error("useCountryData must be used within CountryDataProvider");
	}

	return context;
}
