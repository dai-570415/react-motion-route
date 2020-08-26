import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

const Dialog = () => {
    const location = useLocation();
    const history = useHistory();
    const close = () => {
      history.push(location.pathname);
    };
    return (
      <>
        <motion.div
          className="overlay"
          animate={{
            opacity: 1
          }}
          initial={{
            opacity: 0
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
          onClick={close}
        />
        
        <motion.div
          className="dialog"
          animate={{
            y: 0,
            opacity: 1
          }}
          initial={{
            y: 50,
            opacity: 0
          }}
          exit={{
            y: 50,
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
        >
          <h1>This is Dialog</h1>
          <Link to={location.pathname}>Close</Link>
        </motion.div>
      </>
    );
  };

  export default Dialog;