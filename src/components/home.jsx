import React from 'react';
import ReactDOM from 'react-dom';
import {SectionPost} from "./sectionPost.jsx";
import {Main} from "./mainHome/main.jsx";
import {SectionDiscount} from "./sectionDiscount.jsx";
import {Footer} from "./footer.jsx";

export class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            refShop: ""
        }
    }

    refShop = (refShop) => {
        console.log(refShop)
        this.setState({
            refShop: refShop
        })
    };

    render(){
        return <div>
            <SectionPost refShop={this.state.refShop}/>
            <Main shop={this.refShop}/>
            <SectionDiscount/>
            <Footer/>
        </div>
    }
}
