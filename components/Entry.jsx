import Marker from "/assets/img/Marker.svg"
import MountFiji from "/assets/img/Japan/MountFuji.png"


export default function Entry (props) {
    return (
        <article className="journal-entry">
                <div className="image-container">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>

                <div className="info-container">
                    <div className="info-header">
                        <img src={Marker} alt="Marker"/>
                        <h1 className="info-header-country">{props.countryName}</h1>
                        <a href={props.locationMapLink} 
                            target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>
                    
                    <h1 className="info-title">
                        {props.imgAlt}
                    </h1>

                    <div className="info-date">
                        {props.travelDate}
                    </div>
                    
                    <div className="info-content">
                        {props.infoContent}
                    </div>
                </div>
        </article>
    )
}