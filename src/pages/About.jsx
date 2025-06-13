import aboutImg from "../assets/about-img.png"
export default function About() {
    return (
        <div className="about">
            <img src={aboutImg} alt="About Hero" className="about-hero" />
            <h2 className="about-heading">Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p className="about-text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br />
                <br />
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

            <div className="explore-vans">
                <p>Your destination is waiting.
                    <br />
                Your van is ready.</p>
                <button className="explore-vans-button">Explore Our Vans</button>
            </div>
        </div>
    )
}