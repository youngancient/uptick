import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import HashLoader from "react-spinners/HashLoader";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer/Footer";

const loaderVariant = {
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
    },
  },
};

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="loader"
            variants={loaderVariant}
            key="hinokami"
            exit="exit"
          >
            <HashLoader color={"#ce5604"} size={50} />
          </motion.div>
        ) : (
          <>
            <Main />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
