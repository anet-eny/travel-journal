export default function Card(props) {
    return (
        <div className="card">
            <div className="card-container">
                <img src={props.item.imageUrl} alt="" />
                <div className="text-container">
                    <div className="location-container">
                        <i className="fa-solid fa-location-dot"></i>
                        <h4 className="location">{props.item.location}</h4>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.item.title}</h1>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}