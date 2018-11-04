import React from 'react';
import ReactDOM from 'react-dom';

export class MainFilterBrands extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            brand: ["bower", "braun", "elevenPlus", "field",
                "menu"],
            clickedBrand: -1
        })
    }

    handleOnBrand = (e,i) => {
        if ( typeof this.props.brand === 'function' ){
            this.props.brand(this.state.brand[i]);
        }
        this.setState({
            clickedBrand: i
        })
    };

    render(){
        return <div className="main__filter-brands">
            <h3 className="main__filter-brands--info">Brands</h3>
            <span className="main__filter-brands--text" onClick={e => this.handleOnBrand(e,0)}
                  style={this.state.clickedBrand===0? {color: "rgb(0,0,0)"}: null}>Bower
                <span className="main__filter-brands--text-number">
                    {this.props.bower.toString().length===1? `0${this.props.bower}` : this.props.bower}
                </span>
            </span>
            <span className="main__filter-brands--text" onClick={e => this.handleOnBrand(e,1)}
                  style={this.state.clickedBrand===1? {color: "rgb(0,0,0)"}: null}>Braun
                <span className="main__filter-brands--text-number">
                    {this.props.braun.toString().length===1? `0${this.props.braun}` : this.props.braun}
                </span>
            </span>
            <span className="main__filter-brands--text" onClick={e => this.handleOnBrand(e,2)}
                  style={this.state.clickedBrand===2? {color: "rgb(0,0,0)"}: null}>Elevenplus
                <span className="main__filter-brands--text-number">
                    {this.props.elevenPlus.toString().length===1? `0${this.props.elevenPlus}` : this.props.elevenPlus}
                </span>
            </span>
            <span className="main__filter-brands--text" onClick={e => this.handleOnBrand(e,3)}
                  style={this.state.clickedBrand===3? {color: "rgb(0,0,0)"}: null}>Field
                <span className="main__filter-brands--text-number">
                    {this.props.field.toString().length===1? `0${this.props.field}` : this.props.field}
                </span>
            </span>
            <span className="main__filter-brands--text" onClick={e => this.handleOnBrand(e,4)}
                  style={this.state.clickedBrand===4? {color: "rgb(0,0,0)"}: null}>Menu
                <span className="main__filter-brands--text-number">
                    {this.props.menu.toString().length===1? `0${this.props.menu}` : this.props.menu}
                </span>
            </span>
        </div>
    }
}
