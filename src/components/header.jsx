import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    BrowserRouter
} from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scroll: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleOnScroll);
    }

    handleOnScroll = () => {
        if(window.scrollY >200) {
            this.setState({
                scroll: true
            })
        }else{
            this.setState({
                scroll: false
            })
        }
    };

    handleOnClickShop = () => {
        scrollToComponent(this.props.refShop, {
            offset: -80,
            align: 'top',
            duration: 1500
        });
    };

    handleOnClickHome = () => {
        scrollToComponent(this.props.refHome, {
            offset: 0,
            align: 'top',
            duration: 1500
        });
    };

    render(){
        const scrollStyle = {
            backgroundColor: "rgb(230,230,230)",
            boxShadow: "3px 3px 5px 0px rgba(0,0,0,0.75)",
            transition: "0.5s"
        };

        return <header className="header" style={this.state.scroll===true? scrollStyle : {transition: "0.5s"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <NavLink exact to="/" className="header__nav--logo">
                            <img src={require("../pictures/logo.png")} alt="" className="header__nav--logo-item"/>
                        </NavLink>
                    </div>
                    <div className="col-lg-5">
                        <ul className="header__nav--list">
                            <li><NavLink exact to="/" className="header__nav--item" onClick={this.handleOnClickHome}>Home</NavLink></li>
                            <li className="header__nav--item" onClick={this.handleOnClickShop}>Shop</li>
                            <li><NavLink to="/journal" className="header__nav--item">Journal</NavLink></li>
                            <li><NavLink to="/pages" className="header__nav--item">Pages</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-1">
                        <NavLink to="/basket" className="header__nav--basket">
                            <img src={require("../pictures/payment.png")} alt=""/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    }
}
