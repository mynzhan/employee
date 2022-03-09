import './app-info.css';

const AppInfo = ({increased, films}) => {
    return (
        <div className="app-info">
            <h1>Films in CinemaMachine</h1>
            <h2>Sum in theater: {films}</h2>
            <h2>Films pay +{increased}</h2>
        </div>
    )
}

export default AppInfo;