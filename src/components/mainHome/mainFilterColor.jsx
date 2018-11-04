import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core/index";

library.add(faCheck);

export class MainFilterColor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            colors: [false,false,false,false,false],
            colorsVal: ["rgb(200, 200, 200)", "rgb(255, 255, 255)", "rgb(254, 138, 138)", "rgb(180, 230, 253)", "rgb(191, 253, 202)"],
            colorsNames: ["grey", "white", "red", "blue", "green"]
        }
    }

    handleOnClick = (e,i) => {
        let colors = this.state.colors;
        let sendColors=[];
        colors[i]= colors[i]===false? true : false;
        this.setState({
            colors: colors,
        });
        if ( typeof this.props.colors === 'function' ){
            colors.forEach((el,i)=>{
                if(el===true){
                    sendColors = [...sendColors,this.state.colorsNames[i]]
                }
            });
            this.props.colors(sendColors);
        }
    };


    render(){
        const colors = this.state.colors.map((el,i) => {
            return <div key={i} className="main__filter-color--items-val"
                        onClick={e=> this.handleOnClick(e,i)}
                        style={{background: `${this.state.colorsVal[i]}`}}>
                        {this.state.colors[i]===false? null : <FontAwesomeIcon icon={faCheck} style={{color: "#000"}}/>}
                   </div>
        });
        return <div className="main__filter-color">
            <h3 className="main__filter-color--info">Color</h3>
            <div className="main__filter-color--items">
                {colors}
            </div>
        </div>
    }
}