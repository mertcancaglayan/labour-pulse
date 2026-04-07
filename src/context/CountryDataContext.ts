import { createContext } from "react";
import type { DataSetsI } from "./context";

interface CountryDataContextType {
	country: string;
	switchCountry: (c: string) => void;
	countryData: DataSetsI; 
}

export const CountryDataContext = createContext<CountryDataContextType | null>(null);
