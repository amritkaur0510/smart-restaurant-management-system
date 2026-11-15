
import "../styles/Home.css";
import heroImage from "../assets/Hero_Image.png";
import PopularDishes from "../components/PopularDishes";
import { Link } from "react-router";

function Home() {
    return (
        <main>
            <section
                className="heroSection"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(20, 15, 12, 0.88) 0%,
                            rgba(20, 15, 12, 0.58) 48%,
                            rgba(20, 15, 12, 0.25) 100%
                        ),
                        url(${heroImage})
                    `
                }}
            >
                <div className="heroContent">
                    <span className="heroEyebrow">
                        FRESH INGREDIENTS · THOUGHTFULLY PREPARED
                    </span>

                    <h1>
                        A little taste
                        <br />
                        of <em>something special.</em>
                    </h1>

                    <p>
                        Discover thoughtfully prepared dishes, fresh
                        ingredients and flavours worth coming back for.
                        Make every meal a moment to enjoy.
                    </p>

                    <div className="heroButtons">
                        <Link to="/menu" className="primaryButton">
                            Explore the Menu
                        </Link>

                        <Link to="/reservation" className="secondaryButton">
                            Reserve a Table
                        </Link>
                    </div>
                </div>

                <div className="heroSideNote">
                    GOOD FOOD. GOOD COMPANY.
                </div>

                <div className="heroScroll">
                    <span></span>
                    SCROLL TO DISCOVER
                </div>
            </section>

            <PopularDishes />
        </main>
    );
}

export default Home;
