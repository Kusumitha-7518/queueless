import "../styles/About.css";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="container about-content">

        <motion.div
          className="about-left"
          initial={{opacity:0,x:-80}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        >

          <h2>Why Choose QueueLess?</h2>

          <p>
            QueueLess transforms traditional waiting lines into
            a seamless digital experience. Whether you're visiting
            a hospital, bank, college, salon, or government office,
            you can join the queue remotely and receive live updates
            until it's your turn.
          </p>

          <ul className="about-list">

            <li>
              <FaCheckCircle className="check"/>
              Live Queue Tracking
            </li>

            <li>
              <FaCheckCircle className="check"/>
              Smart Notifications
            </li>

            <li>
              <FaCheckCircle className="check"/>
              QR Code Check-In
            </li>

            <li>
              <FaCheckCircle className="check"/>
              Priority Queue Support
            </li>

          </ul>

        </motion.div>

        <motion.div
          className="about-right"
          initial={{opacity:0,x:80}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
        >

          <div className="dashboard-preview">

            <h3>Today's Queue</h3>

            <div className="queue-box">

              <h2>Now Serving</h2>

              <h1>#028</h1>

            </div>

            <div className="info-row">

              <span>Your Token</span>

              <strong>#034</strong>

            </div>

            <div className="info-row">

              <span>Estimated Wait</span>

              <strong>18 min</strong>

            </div>

            <div className="info-row">

              <span>Status</span>

              <span className="live">LIVE ●</span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;