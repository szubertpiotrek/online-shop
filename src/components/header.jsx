import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faChevronLeft,faChevronRight)

export class Header extends React.Component {
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
        return <header className="header">
            <div className="container header__background">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="header__nav--logo">
                            <img src={require("../pictures/logo.png")} alt="" className="header__nav--logo-item"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className="header__nav--list">
                            <li className="header__nav--item">Home</li>
                            <li className="header__nav--item">Shop</li>
                            <li className="header__nav--item">Journal</li>
                            <li className="header__nav--item">Elements</li>
                            <li className="header__nav--item">Pages</li>
                        </ul>
                    </div>
                    <div className="col-lg-1">
                        <div className="header__nav--basket">
                            <img src={require("../pictures/payment.png")} alt=""/>
                        </div>
                    </div>
                </div>

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
        </header>
    }
}
