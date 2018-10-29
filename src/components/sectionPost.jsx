import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Header} from "./header.jsx";

library.add(faChevronLeft,faChevronRight);

export class SectionPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 1,
            photos: []
        }
    }

    componentDidMount(){

    }

    render(){
        return <section className="section-post" ref={home => {this.home = home}}>
            <div className="container header__background">
                <Header refShop={this.props.refShop} refHome={this.home}/>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__intro--button-left">
                            <button className="header__intro--button-item">
                                <FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-3">
                        <div className="header__intro--post">
                            <h1 className="header__intro--text">Sky Planet</h1>
                            <div className="header__intro--link">
                                <a href="" className="header__intro--link-item">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="header__intro--button-right">
                            <button className="header__intro--button-item">
                                <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="header__page">
                            <span className="header__page--item">{this.state.page} of {this.state.photos.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}