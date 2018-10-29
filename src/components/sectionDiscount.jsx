import React from 'react';
import ReactDOM from 'react-dom';

export class SectionDiscount extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <article className="section-discount">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h2 className="section-discount__info">Get Discount 35% off</h2>
                    </div>
                    <div className="col-lg-7">
                        <form action="" className="section-discount__form">
                            <input placeholder="Enter your email..." className="section-discount__form--input"/>
                            <button className="section-discount__form--btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </article>
    }
}
