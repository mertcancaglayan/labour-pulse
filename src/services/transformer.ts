import { INDICATOR_MAP } from "../api/endpoints";
import type { DataI } from "./getRawData";

export interface TransformedDataI {
	"Total Unemployment": number;
	"Youth Unemployment": number;
	"Graduate Unemployment": number;
	"Labor Participation Rate": number;
	"Services Sector (% of Labor)": number;
	"Industry Sector (% of Labor)": number;
	"Agriculture Sector (% of Labor)": number;
	"Manufacturing Output (% of GDP)": number;
	"Headline Inflation (CPI)": number;
	"Labor Productivity (USD)": number;
	[key: string]: number;
}

export const transformMergedData = (laborRaw: DataI[], ecoRaw: DataI[]): Record<number, TransformedDataI> => {
	const transformedData: Record<number, TransformedDataI> = {};

	const rawData = [...laborRaw, ...ecoRaw];

	rawData.forEach((item) => {
		const year = parseInt(item.date);
		const indicatorId = item.indicator.id as keyof typeof INDICATOR_MAP;
		const label = INDICATOR_MAP[indicatorId];

		if (!transformedData[year]) {
			transformedData[year] = {} as TransformedDataI;
		}

        const value = item.value || 0

		transformedData[year][label] = value;
	});

	return transformedData;
};
