import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

require('react-input-range/lib/css/index.css');

export class MainFilterPrice extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: {
                min: Math.round(this.props.priceMax/7),
                max: Math.round(this.props.priceMax-this.props.priceMax/7)
            }
        }
    }

    handleValueMin = (e) => {
        console.log(e.target.value);
        this.setState({
            value: {
               min : e.target.value
            }
        })
    };

    handleValueMax = (e) => {
        this.setState({
            value: {
                max : e.target.value
            }
        })
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        if ( typeof this.props.priceUp === 'function' ){
            this.props.priceUp(this.state.value.max);
        }
        if ( typeof this.props.priceDown === 'function' ){
            this.props.priceDown(this.state.value.min);
        }
    };

    render(){
        return <div className="main__filter-price">
            <h3 className="main__filter-price--info">Price</h3>
            <div className="main__filter-price--slider">
                <InputRange className="main__filter-price--slider-style"
                    draggableTrack
                    maxValue={this.props.priceMax}
                    minValue={0}
                    step={5}
                    onChange={value => this.setState({ value: value })}
                    value={this.state.value}
                />
            </div>
            <form onSubmit={e => this.handleOnSubmit(e)} className="main__filter-price--filter">
                <input type="text" className="main__filter-price--filter-down" value={this.state.value.min} onChange={e => this.handleValueMin(e)}/>
                <input type="text" className="main__filter-price--filter-up" value={this.state.value.max} onChange={e => this.handleValueMax(e)}/>
                <button type="submit" className="main__filter-price--filter-btn">Filter</button>
            </form>
        </div>
    }
}
