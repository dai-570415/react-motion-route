import React from 'react';
import { Link } from 'react-router-dom';
import {  motion } from 'framer-motion';

const About = () => (
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
      <h1>About</h1>
      <p>framer-motion + react-router transition example</p>
      <Link to="/">Link to home</Link>
    </motion.div>
);

export default About;