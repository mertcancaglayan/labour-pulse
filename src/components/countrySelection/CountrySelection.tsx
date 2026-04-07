import { useCountryData } from "../../hooks/useCountryData";

const options = [
    { value: "tr", label: "Türkiye" },
    { value: "de", label: "Germany" },
    { value: "pl", label: "Polska" },
];

function CountrySelection() {
    const { country, switchCountry } = useCountryData()

    return (
        <select
            value={country}
            onChange={(e) => switchCountry(e.target.value)}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}

export default CountrySelection;