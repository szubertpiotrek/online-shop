import React from 'react';
import ReactDOM from 'react-dom';

export class MainFilterColor extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return <div className="main__filter-color">
            <h3 className="main__filter-color--info">Color</h3>
            <div className="main__filter-color--items">
                <div className="main__filter-color--items-grey"></div>
                <div className="main__filter-color--items-white"></div>
                <div className="main__filter-color--items-red"></div>
                <div className="main__filter-color--items-blue"></div>
                <div className="main__filter-color--items-green"></div>
            </div>
        </div>
    }
}