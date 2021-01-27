import { UnorderedListOutlined, CalendarOutlined } from '@ant-design/icons';
import './App.css';
import Note from "./assets/Note"
import Med from "./assets/Med"
import Dash from "./assets/Dash"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className='content'>
        <div className="sidebar">
          <div className="logo">Life Alert</div>
          <div className="menu">
            <span className="menu-label">Menu</span>
            <ul className="menu-items">
            <li className='menu-item'><Dash/><p>Dashboard</p></li>
              <li className='menu-item'><Med/><p>Meds</p></li>
              <li className='menu-item'><Note/><p>Notes</p></li>
             
            </ul>
          </div>
        </div>
        <div className="main"></div>
      </div>

    </div>
  )
}

export default App;
