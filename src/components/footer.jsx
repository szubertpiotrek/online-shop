import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="footer__rights">
                            <span className="footer__rights--item">&copy; 2017 Online-Shop. All rights reserved.</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <nav className="footer__nav">
                            <ul className="footer__nav--list">
                                <li className="footer__nav--item">Shop</li>
                                <li className="footer__nav--item">Journal</li>
                                <li className="footer__nav--item">About us</li>
                                <li className="footer__nav--item">Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    }
}
