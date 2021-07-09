import './App.css';
import Layout from './components/Layout'
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
