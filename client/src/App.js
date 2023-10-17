import Navbar from './components/Navbar';
import Home from './pages/Home';
import Coffee from './pages/Coffee';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use Route and Switch

function App() {
  return (
    <div className='App'> 
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/coffee' exact component={Coffee} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
