import { UnorderedListOutlined, CalendarOutlined } from '@ant-design/icons';
import './App.css';
import Note from "./assets/Note"
import Med from "./assets/Med"
import Dash from "./assets/Dash"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="layer">
      <div className='content'>
        <div className="sidebar">
          <div className="logo">Life Alert</div>
          <div className="menu">
            <span className="menu-label">Menu</span>
            <ul className="menu-items">
              <NavLink to='/' >
            <li className='menu-item'><Dash/><p>Dashboard</p></li>
            </NavLink>
            <NavLink to="/meds">
              <li className='menu-item'><Med/><p>Meds</p></li>
              </NavLink>
              <NavLink to="/notes">
              <li className='menu-item'><Note/><p>Notes</p></li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="main">
        <Switch>
          <Route exact path="/">
            Dashboard
          </Route>
          <Route path="/meds">
            Meds
          </Route>
          <Route path="/notes">
            Notes
          </Route>
        </Switch>
        </div>
      </div>
      </div>

    </div>
    </Router>
  )
}

export default App;
