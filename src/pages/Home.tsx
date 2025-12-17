import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to NestVillas</h1>
          <p>
            Discover two peaceful private villas designed for comfort,
            privacy, and unforgettable stays.
          </p>
        </div>
      </section>

      {/* VILLA CARDS */}
      <section className="villas-section">
        <div className="container">
          <h2 className="section-title">Our Villas</h2>

          <div className="villa-cards">
            {/* Cozy Nest */}
            <div className="villa-card">
              <h3>The Cozy Nest</h3>
              <p>
                A warm and relaxing villa perfect for couples and peaceful
                getaways.
              </p>
              <Link to="/cozy-nest" className="btn">
                View Details
              </Link>
            </div>

            {/* Mangrove Nest */}
            <div className="villa-card">
              <h3>The Mangrove Nest</h3>
              <p>
                A calm escape surrounded by nature, ideal for long and quiet
                stays.
              </p>
              <Link to="/mangrove-nest" className="btn">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
