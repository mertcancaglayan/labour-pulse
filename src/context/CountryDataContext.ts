import { createContext } from "react";
import type { TransformedDataI } from "../services/transformer";

export type ContextType = {
	country: string;
	switchCountry: (selectedCountry: string) => void;
	countryData: TransformedDataI | undefined;
};

export const CountryDataContext = createContext<ContextType | null>(null);
