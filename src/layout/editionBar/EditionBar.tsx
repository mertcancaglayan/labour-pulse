import CountrySelection from "../../components/countrySelection/CountrySelection"
import "./EditionBar.css"

function EditionBar() {
    return (
        <div className="edition-bar">
            <div>Annual Statistical Review</div>
            <CountrySelection></CountrySelection>
        </div>
    )
}

export default EditionBar
