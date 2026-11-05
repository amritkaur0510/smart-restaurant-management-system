import "../styles/Home.css";
import heroImage from "../assets/Hero_Image.png"
import PopularDishes from "../components/popularDishes";

function Home() {
    return (
        <main>

            {/* Hero Section */}
            <section className="heroSection">

                {/* Hero Content */}
                <div className="heroContent">
                    <h1>Discover the Taste of Something Special</h1>

                    <p>
                        Enjoy delicious food made with fresh ingredients
                        and a passion for great flavours. Every meal is
                        an experience worth sharing.
                    </p>

                    <div className="heroButtons">
                        <a href="/menu" className="primaryButton">
                            Explore Menu
                        </a>

                        <a href="/reservations" className="secondaryButton">
                            Book a Table
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="heroImage">
                    <img
                        src={heroImage}
                        alt="Delicious restaurant dish"
                    />
                </div>

            </section>
            <PopularDishes/>

        </main>
    );
}

export default Home