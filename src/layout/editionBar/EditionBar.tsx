import "./EditionBar.css"

function EditionBar() {
    return (
        <div className="edition-bar">
            <div>Annual Statistical Review</div>
            <div className="edition-bar-tabs">
                <button className="ed-tab active" >Overview</button>
                <button className="ed-tab" >Unemployment</button>
                <button className="ed-tab" >Sectors</button>
                <button className="ed-tab" >Inflation &amp; Productivity</button>
            </div>
        </div>
    )
}

export default EditionBar
