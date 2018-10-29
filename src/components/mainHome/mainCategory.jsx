import React from 'react';
import ReactDOM from 'react-dom';

export class MainCategory extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <div className="main__category">
            <span className="main__category--text">All products<span className="main__category--text-number"></span></span>
            <span className="main__category--text">Living<span className="main__category--text-number"></span></span>
            <span className="main__category--text">Dining<span className="main__category--text-number"></span></span>
            <span className="main__category--text">Furniture<span className="main__category--text-number"></span></span>
            <span className="main__category--text">Lighting<span className="main__category--text-number"></span></span>
            <span className="main__category--text">Technics<span className="main__category--text-number"></span></span>
            <span className="main__category--text">Accessories<span className="main__category--text-number"></span></span>
        </div>
    }
}