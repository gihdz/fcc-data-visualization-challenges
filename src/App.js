import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Barchart from './pages/Barchart'
import './css/Barchart.css'
import './App.css'

const Home = () => (
  <div>
    <h2>My FCC data visualization challenges</h2>
  </div>
)

export default class extends React.Component {
  render(){
    const base = process.env.PUBLIC_URL;
    const homeUrl = `${base}/`;
    const barchartUrl = `${base}/barchart`;
    return ( 
    <Router>
    <div>
      <ul className="nav" >
        <li><Link to={homeUrl}>Home</Link></li>
        <li><Link to={barchartUrl}>Barchart</Link></li>
      </ul>

      <hr/>

      <Route exact path={homeUrl} component={Home}/>
      <Route path={barchartUrl} component={Barchart}/>
    </div>
    </Router>);
  }
}