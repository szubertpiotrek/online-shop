import React from 'react';
import ReactDOM from 'react-dom';

export class MainFilterSize extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            size: ["S", "M", "L"],
            clickedSize: -1
        })
    }

    handleOnSize = (e,i) => {
        if ( typeof this.props.size === 'function' ){
            this.props.size(this.state.size[i]);
        }
        this.setState({
            clickedSize: i
        })

    };

    render(){
        return <div className="main__filter-size">
            <h3 className="main__filter-size--info">Size</h3>
            <span className="main__filter-size--text" onClick={e => this.handleOnSize(e,0)}
                  style={this.state.clickedSize===0? {color: "rgb(0,0,0)"}: null}>Small
                <span className="main__filter-size--text-number">
                    {this.props.sizeS.toString().length===1? `0${this.props.sizeS}` : this.props.sizeS}
                </span>
            </span>
            <span className="main__filter-size--text" onClick={e => this.handleOnSize(e,1)}
                  style={this.state.clickedSize===1? {color: "rgb(0,0,0)"}: null}>Medium
                <span className="main__filter-size--text-number">
                    {this.props.sizeM.toString().length===1? `0${this.props.sizeM}` : this.props.sizeM}
                </span>
            </span>
            <span className="main__filter-size--text" onClick={e => this.handleOnSize(e,2)}
                  style={this.state.clickedSize===2? {color: "rgb(0,0,0)"}: null}>Large
                <span className="main__filter-size--text-number">
                    {this.props.sizeL.toString().length===1? `0${this.props.sizeL}` : this.props.sizeL}
                </span>
            </span>
        </div>
    }
}
