import React, {Component} from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contribute from "./pages/Contribute";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">

                    <Navbar title="User App"/>
                    <Switch>
                        <Route exact path="/" component={Users}/>
                        <Route exact path="/adduser" component={AddUser}/>
                        <Route exact path="/github" component={Contribute} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;
