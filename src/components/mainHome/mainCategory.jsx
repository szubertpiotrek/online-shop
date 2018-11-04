import React from 'react';
import ReactDOM from 'react-dom';

export class MainCategory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            category: ["allprod", "living", "dining", "furniture",
            "lighting", "technics", "accessories"],
            clickedCategory: 0
        }
    }

    componentDidMount(){

    }

    handleOnCategory = (e,i) => {
        if ( typeof this.props.category === 'function' ){
            this.props.category(this.state.category[i]);
        }
        this.setState({
            clickedCategory: i
        })
    };

    render(){
        return <div className="main__category">
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,0)}
                  style={this.state.clickedCategory===0? {color: "rgb(0,0,0)"}: null}>All products
                <span className="main__category--text-number">{this.props.allProd.toString().length===1? `0${this.props.allProd}` : this.props.allProd}</span>
            </span>
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,1)}
                  style={this.state.clickedCategory===1? {color: "rgb(0,0,0)"}: null}>Living
                <span className="main__category--text-number">{this.props.living.toString().length===1? `0${this.props.living}` : this.props.living}</span>
            </span>
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,2)}
                  style={this.state.clickedCategory===2? {color: "rgb(0,0,0)"}: null}>Dining
                <span className="main__category--text-number">{this.props.dining.toString().length===1? `0${this.props.dining}` : this.props.dining}</span>
            </span>
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,3)}
                  style={this.state.clickedCategory===3? {color: "rgb(0,0,0)"}: null}>Furniture
                <span className="main__category--text-number">{this.props.furniture.toString().length===1? `0${this.props.furniture}` : this.props.furniture}</span>
            </span>
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,4)}
                  style={this.state.clickedCategory===4? {color: "rgb(0,0,0)"}: null}>Lighting
                <span className="main__category--text-number">{this.props.lighting.toString().length===1? `0${this.props.lighting}` : this.props.lighting}</span>
            </span>
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,5)}
                  style={this.state.clickedCategory===5? {color: "rgb(0,0,0)"}: null}>Technics
                <span className="main__category--text-number">{this.props.technics.toString().length===1? `0${this.props.technics}` : this.props.technics}</span>
            </span>
            <span className="main__category--text" onClick={e => this.handleOnCategory(e,6)}
                  style={this.state.clickedCategory===6? {color: "rgb(0,0,0)"}: null}>Accessories
                <span className="main__category--text-number">{this.props.accessories.toString().length===1? `0${this.props.accessories}` : this.props.accessories}</span>
            </span>
        </div>
    }
}