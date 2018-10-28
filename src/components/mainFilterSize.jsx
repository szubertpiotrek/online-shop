import React from 'react';
import ReactDOM from 'react-dom';

export class MainFilterSize extends React.Component{

    constructor(props){
        super(props);
        this.state = ({

        })
    }

    render(){
        return <div className="main__filter-size">
            <h3 className="main__filter-size--info">Size</h3>
            <span className="main__filter-size--text">Small<span className="main__filter-size--text-number"></span></span>
            <span className="main__filter-size--text">Medium<span className="main__filter-size--text-number"></span></span>
            <span className="main__filter-size--text">Large<span className="main__filter-size--text-number"></span></span>
        </div>
    }
}
