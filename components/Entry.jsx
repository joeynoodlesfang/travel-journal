import Marker from "/assets/img/Marker.svg"

function parseDuration(travelDuration) {
    if (!travelDuration || isNaN(travelDuration)) {
        return ""; 
    }
    
    let durationStr = "";
    if (travelDuration == 1) {
        durationStr = " (1 day)";
    } else if (travelDuration < 6) {
        durationStr = " (" + travelDuration + " days" + ")";
    } else if (travelDuration < 28) {
        let duration = Math.round(travelDuration / 7);
        durationStr = " (" + duration;
        if (duration > 1) {
            durationStr += " weeks" + ")";
        } else {
            durationStr += " week" + ")";
        }
    } else if (travelDuration < 365) {
        let duration = Math.round(travelDuration / 30);
        durationStr = " (" + duration;
        if (duration > 1) {
            durationStr += " months" + ")";
        } else {
            durationStr += " month" + ")";
        }
    } else {
        let duration = Math.round(travelDuration / 365);
        durationStr = " (" + duration;
        if (duration > 1) {
            durationStr += " years" + ")";
        } else {
            durationStr += " year" + ")";
        }
    }
    return durationStr;
}

export default function Entry (props) {
    let durationStr = parseDuration(props.travelDuration);
    
    return (
        <article className="journal-entry">
                <div className="image-container">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>

                <div className="info-container">
                    <div className="info-header">
                        <img src={Marker} alt="Marker"/>
                        <h1 className="info-header-country">{props.areaName}</h1>
                        <a href={props.locationMapLink} 
                            target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>
                    
                    <h1 className="info-title">
                        {props.imgAlt}
                    </h1>

                    <div className="info-date">
                        {props.travelMonth}{durationStr}
                    </div>
                    
                    <div className="info-content">
                        {props.infoContent}
                    </div>
                </div>
        </article>
    )
}