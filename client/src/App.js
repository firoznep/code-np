import Header from './components/Header';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/todo' component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
