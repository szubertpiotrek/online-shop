import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

require('./scss/main.scss');

import {Main} from './components/main.jsx';
import {Header} from "./components/header.jsx";
import {SectionPost} from "./components/sectionPost.jsx";

class App extends React.Component {

   constructor(props){
     super(props);

   }

    render() {
        return <div>
            <Header/>
            <SectionPost/>
            <Main />
        </div>
    }

}

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(
      <App />,
    document.querySelector('#app')
  )

})
