import "../styles/Features.css";
import { motion } from "framer-motion";

import {
  FaMobileAlt,
  FaClock,
  FaBell,
  FaQrcode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt />,
    title: "Join Queue Remotely",
    text: "Reserve your spot before reaching the location and avoid standing in long lines.",
  },
  {
    icon: <FaClock />,
    title: "Live Queue Tracking",
    text: "Watch your queue position update in real time with an estimated waiting time.",
  },
  {
    icon: <FaBell />,
    title: "Smart Notifications",
    text: "Receive alerts when your turn is approaching so you never miss your slot.",
  },
  {
    icon: <FaQrcode />,
    title: "QR Code Check-In",
    text: "Scan a QR code on arrival for instant and secure verification.",
  },
];

function Features() {
  return (
    <section className="features" id="features">

      <div className="container">

        <h2 className="section-title">
          Powerful Features
        </h2>

        <p className="section-subtitle">
          QueueLess helps hospitals, banks, colleges,
          salons and government offices manage queues
          efficiently while saving everyone's time.
        </p>

        <div className="features-grid">

          {features.map((feature, index) => (

            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              <div className="icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;