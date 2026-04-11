import { createContext } from "react";
import type { useData } from "../hooks/useData";

interface CountryDataContextType {
	country: string;
	switchCountry: (c: string) => void;
	countryData: ReturnType<typeof useData>;
}

export const CountryDataContext = createContext<CountryDataContextType | null>(null);
