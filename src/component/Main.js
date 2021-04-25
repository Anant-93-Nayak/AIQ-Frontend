import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import Aiq from './Aiq'
import InnovationHistory from './InnovationHistory'
import Team from './Team';
import Navbar from './Navbar'

const Main = () => {

    return(
        <Router>
            <Navbar/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/history" component={InnovationHistory}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/questionaire" component={Aiq}/>
                <Route path="/aboutus" component={Team}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    );
}

export default Main
