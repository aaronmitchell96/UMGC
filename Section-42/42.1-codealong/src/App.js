import './App.css';
import { BrowserRouter, Route} from 'react-router-dom'

import NavBar from './Navbar';
import Home from './Home';
import Drink from './Drink';
import Eat from './Eat';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/drink'>
          <Drink />
        </Route>
        <Route exact path='/eat'>
          <Eat />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
