import React from 'react';
import ReactDOM from 'react-dom';
import {SectionPost} from "./sectionPost.jsx";
import {Main} from "./mainHome/main.jsx";
import {SectionDiscount} from "./sectionDiscount.jsx";
import {Footer} from "./footer.jsx";

export class Shop extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <div>
            <Main/>
            <SectionDiscount/>
        </div>
    }
}
