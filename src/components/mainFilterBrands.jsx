import React from 'react';
import ReactDOM from 'react-dom';

export class MainFilterBrands extends React.Component{

    constructor(props){
        super(props);
        this.state = ({

        })
    }

    render(){
        return <div className="main__filter-brands">
            <h3 className="main__filter-brands--info">Brands</h3>
            <span className="main__filter-brands--text">Bower<span className="main__filter-brands--text-number"></span></span>
            <span className="main__filter-brands--text">Braun<span className="main__filter-brands--text-number"></span></span>
            <span className="main__filter-brands--text">Elevenplus<span className="main__filter-brands--text-number"></span></span>
            <span className="main__filter-brands--text">Field<span className="main__filter-brands--text-number"></span></span>
            <span className="main__filter-brands--text">Menu<span className="main__filter-brands--text-number"></span></span>
        </div>
    }
}
