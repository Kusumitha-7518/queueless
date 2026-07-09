import "../styles/Stats.css";
import { motion } from "framer-motion";

const stats = [
  {
    number: "15K+",
    title: "Active Users",
  },
  {
    number: "350+",
    title: "Organizations",
  },
  {
    number: "98%",
    title: "Customer Satisfaction",
  },
  {
    number: "1.2M+",
    title: "Queue Tokens Generated",
  },
];

function Stats() {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((stat,index)=>(

            <motion.div
              key={index}
              className="stat-card"
              initial={{opacity:0,scale:.8}}
              whileInView={{opacity:1,scale:1}}
              viewport={{once:true}}
              transition={{delay:index*.15}}
            >

              <h1>{stat.number}</h1>

              <p>{stat.title}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;