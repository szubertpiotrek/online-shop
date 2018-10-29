import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

require('./scss/main.scss');

import {Home} from "./components/home.jsx";
import {Shop} from "./components/shop.jsx";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    BrowserRouter
} from 'react-router-dom';

class App extends React.Component {

   constructor(props){
     super(props);

   }

    render() {
        return <HashRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/shop'} component={Shop}/>
            </Switch>
        </HashRouter>
    }

}

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
