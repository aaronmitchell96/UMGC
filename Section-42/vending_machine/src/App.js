import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Chips from './Chips'
import HotCheetos from './HotCheetos'
import Twizlers from './Twizlers'
import Home from './Home';

function App() {
  return (
    <div className="App">
            <div>
              <BrowserRouter>
                  <NavLink exact to="/">
                    Vending Machine
                  </NavLink>
                  <Route exact path='/'><Home/></Route>
                  <Route exact path='/chips'><Chips/></Route>
                  <Route exact path='/hotcheetos'><HotCheetos/></Route>
                  <Route exact path='/twizlers'><Twizlers/></Route>
              </BrowserRouter>
            </div>  
    </div>
  );
}

export default App;
