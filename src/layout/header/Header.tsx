import "./Header.css"

function Header() {
    return (
        <header className="masthead">
            <div className="masthead-inner">
                <div className="masthead-title">
                    <div>
                        <div className="pub-name">LabourPulse</div>
                        <div className="pub-sub">Labour Market Intelligence · 1990–2025</div>
                    </div>
                </div>
                <div className="masthead-meta">
                    <div>Data source: <strong>World Bank</strong></div>
                    <div>Coverage: <strong>35 Years</strong></div>
                    <div>Last updated: <strong>2025</strong></div>
                </div>
            </div>
        </header>
    )
}

export default Header
