import { useEffect, useMemo, useState } from "react";
import type { TransformedDataI } from "../services/transformer";
import { getData } from "../services/getRawData";

export const useData = (country: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);
    const [data, setData] = useState<Record<number, TransformedDataI>>({});

    useEffect(() => {
        const init = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const result = await getData(country);
                setData(result);
            } catch (err) {
                console.error("Initialization failed", err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        init();
    }, [country]);

    const labels = useMemo(
        () => Object.keys(data).map(Number),
        [data]
    );

    const datasets = useMemo(() => {
        const values = Object.values(data);

        return {
            totalUnemployment: values.map(item => item["Total Unemployment"]),
            youthUnemployment: values.map(item => item["Youth Unemployment"]),
            graduateUnemployment: values.map(item => item["Graduate Unemployment"]),
            laborParticipation: values.map(item => item["Labor Participation Rate"]),

            servicesSector: values.map(item => item["Services Sector (% of Labor)"]),
            industrySector: values.map(item => item["Industry Sector (% of Labor)"]),
            agricultureSector: values.map(item => item["Agriculture Sector (% of Labor)"]),

            manufacturingOutput: values.map(item => item["Manufacturing Output (% of GDP)"]),

            inflation: values.map(item =>
                Math.trunc(item["Headline Inflation (CPI)"])
            ),

            laborProductivity: values.map(item => item["Labor Productivity (USD)"]),
        };
    }, [data]);

    return {
        isLoading,
        error,
        labels,
        ...datasets,
    };
};