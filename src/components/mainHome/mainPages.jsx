import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight);


export class MainPages extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pages: [1,2,3,12]
        }
    }

    render(){
        const page = this.state.pages.map((el,i)=>{
           return <span key={i} className="main__pages--item">{el.toString().length===1? `0`+el : el}</span>
        });

        return <div className="main__pages">
            {page}
            <div className="main__pages--arrow">
                <FontAwesomeIcon icon="arrow-right"/>
            </div>
        </div>
    }

}