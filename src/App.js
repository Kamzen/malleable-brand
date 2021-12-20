
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './casa.css';
import Explore from './pages/explore/Explore';
import FindHelp from './pages/find-help/FindHelp';
import ListOrg from './pages/list-org/ListOrg';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

class App extends Component{


  async componentDidMount() {

    


  }


  render(){

    return (

      
      
      <BrowserRouter>


      
        <Switch>
          
          <Route exact path={'/casa/:username'}>
            <Explore link="home" />
          </Route>
          <Route exact path={'/organizations'} component={ListOrg} />
          <Route exact path={'/help'} component={FindHelp} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          {/*<Route exact path={'/login'} component={Login} /> */}

        </Switch>

      </BrowserRouter>
      
    );

  }

}

export default App;
