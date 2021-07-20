import './App.css';
import Layout from './components/Layout'
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import { Route, Switch, useLocation } from 'react-router-dom'
import Portfolio from './pages/Portfolio';
import Bio from './pages/Bio';
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'
import { ModalContextProvider } from './components/UI/ModalWrapper';

function App() {

  const location = useLocation();

  return (
   
    <div className="App">
    <ModalContextProvider>
      <Layout>
        <ScrollToTop />
        <AnimatePresence >
          <Switch location={location} key={location.pathname}>
            <Route path={process.env.PUBLIC_URL + '/'} exact>
              <Homepage />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/bio'>
              <Bio />
            </Route>
          </Switch>
        </AnimatePresence>
      </Layout>
      <Footer />
    </ModalContextProvider>
    </div>
  );
}

export default App;
