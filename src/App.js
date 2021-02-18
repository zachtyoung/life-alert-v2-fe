import { UnorderedListOutlined, CalendarOutlined } from '@ant-design/icons';
import './App.css';
import Note from "./assets/Note"
import Med from "./assets/Med"
import Dash from "./assets/Dash"
import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import icon from './assets/LA-icon.png'
import Footer from "./components/Footer";
import CalendarComponent from './components/Calendar'
function App() {
  return (
    <Router>
    <div className="container">
      <div className="layer">
      <div className='content'>
      <div className="logo"><img src={icon}/></div>
      <div className='header'><h2>Febuary 18th 2021</h2></div>
        <div className="sidebar">
          <div className="menu">
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
          <div className="calendar">
            <CalendarComponent className='ant-cal'/>
          </div>
        </div>
       
        <div className="main">
        <Switch>
          <Route exact path="/">
            <Dashboard/>
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
<Footer/>
    </div>
    </Router>
  )
}

export default App;
