import "../styles/Hero.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Never Wait <br />
            in a <span>Queue</span> Again.
          </h1>

          <p>
            Join queues remotely for hospitals, banks,
            colleges and government offices.
            Save time with real-time updates,
            estimated waiting time and smart notifications.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/dashboard")}
            >
              Join Queue
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mockup">
            <div className="queue-card">
              <h2>Current Token</h2>
              <h1>28</h1>
            </div>

            <div className="small-card">
              <h4>Your Token</h4>
              <p>#34</p>
            </div>

            <div className="small-card">
              <h4>Estimated Wait</h4>
              <p>18 Minutes</p>
            </div>

            <div className="small-card">
              <h4>Status</h4>
              <p>Waiting...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;