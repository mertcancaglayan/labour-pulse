import { getLaborMetrics, getEconomicMetrics } from "../api/client";
import { transformMergedData, type TransformedDataI } from "./transformer";

interface Indicator {
	id: string;
	value: string;
}

interface Country {
	id: string;
	value: string;
}

export interface DataI {
	indicator: Indicator;
	country: Country;
	countryiso3code: string;
	date: string;
	value: number | null;
	scale: string;
	unit: string;
	obs_status: string;
	decimal: number;
}

const loadInitialData = async (): Promise<[DataI[], DataI[]]> => {
	try {
		const [laborRaw, ecoRaw] = await Promise.all([getLaborMetrics(), getEconomicMetrics()]);

		return [laborRaw, ecoRaw];
	} catch (error) {
		console.error("Dashboard Initialization Failed:", error);
		throw error;
	}
};

export const getData = async (): Promise<Record<number, TransformedDataI>> => {
	const [laborRaw, ecoRaw] = await loadInitialData();
	return transformMergedData(laborRaw, ecoRaw);
};
