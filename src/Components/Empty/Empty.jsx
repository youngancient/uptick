import "./style.css";
import { motion } from "framer-motion";

const emptyVariants = {
  right: {
    x: "100vw",
    opacity: 0,
  },
  left: {
    x: "-100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type : "spring",
      stiffness : 300
    },
  },
  exitr:{
    x: "100vw",
    opacity: 0,
    transition: {
        duration: 0.25,
      },
  },
  exitr:{
    x: "100vw",
    opacity: 0,
    transition: {
        duration: 0.25,
      },
  },
  exitl:{
    x: "-100vw",
    opacity: 0,
    transition: {
        duration: 0.25,
      },
  }
};

const Empty = ({ q }) => {
  const truncate = (str, num) => {
    return str.length > num ? str.substring(0, num) + "..." : str;
  };

  return (
    <div className="empty">
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      variants={emptyVariants}
      initial = "left"
      animate = "final"
      className = ""
      exit= "exitl"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </motion.svg>
      <motion.p className=""
      variants={emptyVariants}
      initial = "right"
      animate = "final"
      exit= "exitr"
      >
        No search results for <strong>{truncate(q, 40)}</strong>
      </motion.p>
    </div>
  );
};

export default Empty;
