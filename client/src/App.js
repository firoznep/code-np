import Header from './components/Header';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
