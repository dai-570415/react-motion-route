import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div
    animate={{
      x: 0,
      opacity: 1
    }}
    initial={{
      x: 100,
      opacity: 0
    }}
    exit={{
      x: -100,
      opacity: 0
    }}
    transition={{
      duration: 0.2
    }}
  >
    <h1>Home</h1>
    <Link to="/about">Link to About</Link>
    <Link to="/?dialog">Open Dialog</Link>
  </motion.div>
);

export default Home;