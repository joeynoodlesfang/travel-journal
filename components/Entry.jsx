import Marker from "/assets/img/Marker.svg"
import MountFiji from "/assets/img/Japan/MountFuji.png"

export default function Entry () {
    return (
        <article className="journal-entry">
                <div className="image-container">
                    <img src={MountFiji} alt="MountFuji" />
                </div>

                <div className="info-container">
                    <div className="info-header">
                        <img src={Marker} alt="Marker"/>
                        <h1 className="info-header-country">japan</h1>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/
                            // @35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1
                            // s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.360
                            // 6255!4d138.7273634!16zL20vMGNrczA?entry=ttu" 
                            target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>
                    
                    <h1 className="info-title">
                        Mount Fuji
                    </h1>

                    <div className="info-date">
                        12 Jan, 2023 - 24 Jan, 2023
                    </div>
                    
                    <div className="info-content">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </div>
                </div>
        </article>
    )
}