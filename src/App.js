import React from 'react';
import './assets/css/App.css';
import { Route, useLocation, Switch, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// components(Routes)
import Home from './components/Home';
import About from './components/About';

// elements
import Dialog from './elements/Dialog';

const getQuery = search => {
  const searchParams = new URLSearchParams(search);
  return Object.fromEntries(searchParams);
};

const Routes = () => {
  const location = useLocation(); 
  const [rootPath] = location.pathname.split('/');
  const queryParams = getQuery(location.search);
  const dialog = Object.keys(queryParams).includes('dialog');
  
  return (
    <div className="container">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={rootPath}>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </AnimatePresence>

      <AnimatePresence exitBeforeEnter initial={false}>
        {dialog && <Dialog />}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;