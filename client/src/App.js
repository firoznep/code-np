import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Placeholder from './components/Placeholder';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import SimpleCalc from './pages/SimpleCalc';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      {/* <LockScreen /> */}
      <Header />
      <Placeholder />

      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/todo' component={Todo} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/simple-calc' component={SimpleCalc} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
