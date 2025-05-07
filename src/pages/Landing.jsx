import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p className="hero-subtitle">My Single Page Application</p>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button primary">Get Started</Link>
          <Link to="/about" className="cta-button secondary">Learn More</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Intuitive interface designed for the best user experience</p>
        </div>
        <div className="feature">
          <h3>Sign Up Features</h3>
          <p>Signing up is easy and fast</p>
        </div>
        <div className="feature">
          <h3>24/7 No Support</h3>
          <p>Im not always there to help you</p>
        </div>
      </section>
    </div>
  );
}

export default Landing; 