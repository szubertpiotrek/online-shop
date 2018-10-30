import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    BrowserRouter
} from 'react-router-dom';

import {Header} from "./header.jsx";
import scrollToComponent from "react-scroll-to-component";

import img1 from "../pictures/flower1.png"
import img2 from "../pictures/flower2.png"

library.add(faChevronLeft,faChevronRight);

export class SectionPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            photos: [],
            img: true
        }

    }

    componentDidMount(){
        this.interval = setInterval(() => {
           this.setState({
               page: this.state.page===1? 2: 1,
               img: !this.state.img
           })
        },5000);
    }

    handleOnClickShop = () => {
        scrollToComponent(this.props.refShop, {
            offset: -80,
            align: 'top',
            duration: 1500
        });
    };

    handleOnClickNext = () => {
        clearInterval(this.interval);
        this.setState({
            page: this.state.page===1? 2: 1,
            img: !this.state.img
        });
       this.interval = setInterval(() => {
            this.setState({
                page: this.state.page===1? 2: 1,
                img: !this.state.img
            })
        },5000);
    };

    handleOnClickPrev = () => {
        clearInterval(this.interval);
        this.setState({
            page: this.state.page===1? 2: 1,
            img: !this.state.img
        });
        this.interval = setInterval(() => {
            this.setState({
                page: this.state.page===1? 2: 1,
                img: !this.state.img
            })
        },5000);
    };

    render(){
        const img = {
            backgroundImage: this.state.img===true ? `url(${img1})` : `url(${img2})`,
            transition: "1.5s"
        };
        return <section className="section-post" ref={home => {this.home = home}}>
            <div className="container section-post__background" style={img}>
                <Header refShop={this.props.refShop} refHome={this.home}/>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="section-post__intro--button-left">
                            <button className="section-post__intro--button-item" onClick={this.handleOnClickNext}>
                                <FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3">
                        <div className="section-post__intro--post">
                            <h1 className="section-post__intro--text">Sky Planet</h1>
                            <div className="section-post__intro--link">
                                <div className="section-post__intro--link-item" onClick={this.handleOnClickShop}>Shop Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="section-post__intro--button-right">
                            <button className="section-post__intro--button-item" onClick={this.handleOnClickPrev}>
                                <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-post__page">
                            <span className="section-post__page--item">{this.state.page} of {2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}