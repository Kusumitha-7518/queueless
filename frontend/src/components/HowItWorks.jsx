import "../styles/HowItWorks.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    number: "1",
    title: "Join Queue",
    text: "Choose your hospital, bank or office and join the queue online."
  },
  {
    number: "2",
    title: "Wait Anywhere",
    text: "Relax at home or nearby instead of standing in a physical queue."
  },
  {
    number: "3",
    title: "Get Notified",
    text: "Receive notifications when your turn is approaching."
  },
  {
    number: "4",
    title: "Check In",
    text: "Scan the QR code and complete your visit quickly."
  }
];

function HowItWorks() {
  return (
    <section className="how-section" id="how">

      <div className="container">

        <h2 className="section-title">
          How QueueLess Works
        </h2>

        <p className="section-subtitle">
          Four simple steps to eliminate unnecessary waiting.
        </p>

        <div className="timeline">

          {steps.map((step,index)=>(

            <motion.div
              key={index}
              className="step"
              initial={{opacity:0,y:60}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*.15}}
            >

              <div className="step-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

              <div className="arrow">
                <FaArrowRight/>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;