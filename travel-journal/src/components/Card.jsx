export default function Card() {
    return (
        <div className="card">
            <div className="card-container">
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="" />
                <div className="text-container">
                    <div className="location-container">
                        <i class="fa-solid fa-location-dot"></i>
                        <h4 className="location">Japan</h4>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <h3>12 Jan, 2023 - 24 Jan, 2023</h3>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )
}