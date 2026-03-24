import { economicMetricIndicators, labourMetricIndicators } from "./endpoints";

export const getLaborMetrics = async () => {
	const url = `https://api.worldbank.org/v2/country/tr/indicator/${labourMetricIndicators.join(";")}?format=json&per_page=1000&source=2&date=1990:2026`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok) throw new Error(`Response status: ${response.status}`);
		
		return data[1];
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};

export const getEconomicMetrics = async () => {
	const url = `https://api.worldbank.org/v2/country/tr/indicator/${economicMetricIndicators.join(";")}?format=json&per_page=1000&source=2&date=1990:2026`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (!response.ok) throw new Error(`Response status: ${response.status}`);

		return data[1];
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};
