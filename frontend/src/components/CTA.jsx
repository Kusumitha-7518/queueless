import "../styles/CTA.css";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="cta">

      <div className="container">

        <motion.div
          className="cta-box"
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >

          <h2>Ready to Skip the Queue?</h2>

          <p>
            Join thousands of users who save valuable
            time every day using QueueLess.
            Experience hassle-free queue management
            with live updates and smart notifications.
          </p>

          <button>
            Join Queue Today
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default CTA;