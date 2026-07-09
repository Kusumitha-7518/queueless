import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimationWrapper({ children }) {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 70,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}