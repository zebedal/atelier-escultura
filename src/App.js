import './App.css';
import Layout from './components/Layout'
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import {Route} from 'react-router-dom'
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
