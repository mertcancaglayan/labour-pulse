export type IndicatorCode =
	| "SL.UEM.TOTL.ZS"
	| "SL.UEM.1524.ZS"
	| "SL.UEM.ADVN.ZS"
	| "SL.TLF.CACT.ZS"
	| "SL.SRV.EMPL.ZS"
	| "SL.IND.EMPL.ZS"
	| "SL.AGR.EMPL.ZS"
	| "NV.IND.MANF.ZS"
	| "FP.CPI.TOTL.ZG"
	| "SL.GDP.PCAP.EM.KD";

export const INDICATOR_MAP: Record<IndicatorCode, string> = {
	// --- Labor & Demographics ---
	"SL.UEM.TOTL.ZS": "Total Unemployment",
	"SL.UEM.1524.ZS": "Youth Unemployment",
	"SL.UEM.ADVN.ZS": "Graduate Unemployment",
	"SL.TLF.CACT.ZS": "Labor Participation Rate",

	// --- Sectors & Macro ---
	"SL.SRV.EMPL.ZS": "Services Sector (% of Labor)",
	"SL.IND.EMPL.ZS": "Industry Sector (% of Labor)",
	"SL.AGR.EMPL.ZS": "Agriculture Sector (% of Labor)",
	"NV.IND.MANF.ZS": "Manufacturing Output (% of GDP)",
	"FP.CPI.TOTL.ZG": "Headline Inflation (CPI)",
	"SL.GDP.PCAP.EM.KD": "Labor Productivity (USD)",
};

export const labourMetricIndicators = ["SL.UEM.TOTL.ZS", "SL.UEM.1524.ZS", "SL.UEM.ADVN.ZS", "SL.TLF.CACT.ZS"];
export const economicMetricIndicators = [
	"SL.SRV.EMPL.ZS",
	"SL.IND.EMPL.ZS",
	"SL.AGR.EMPL.ZS",
	"NV.IND.MANF.ZS",
	"FP.CPI.TOTL.ZG",
	"SL.GDP.PCAP.EM.KD",
];
