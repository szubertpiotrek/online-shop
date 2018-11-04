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
            },
            valueInput: {
                min: Math.round(this.props.priceMax/7),
                max: Math.round(this.props.priceMax-this.props.priceMax/7)
            }
        }
    }

    handleValueMin = (e) => {
        if(this.state.value.max>=e.target.value){
            this.setState({
                value: {
                    min :Number(e.target.value),
                    max: this.state.value.max
                }
            })
        }else{
            this.setState({
                value: {
                    max : this.state.value.max,
                    min: this.state.value.max
                }
            })
        }
    };

    handleValueMax = (e) => {
        if(this.state.value.min>=e.target.value){
            this.setState({
                valueInput: {
                    max :Number(e.target.value),
                    min: this.state.value.min
                },
                value: {
                    max :this.state.value.min,
                    min: this.state.value.min
                }
            })
        }else if(this.state.value.max<=e.target.value){
            this.setState({
                value: {
                    max :this.props.priceMax,
                    min: this.state.value.min
                }
            })
        }
        else{
            this.setState({
                value: {
                    max :Number(e.target.value),
                    min: this.state.value.min
                }
            })
        }
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
                <InputRange
                    draggableTrack
                    maxValue={this.props.priceMax}
                    minValue={0}
                    step={5}
                    onChange={value => this.setState({ value: value })}
                    value={this.state.value}
                />
            </div>
            <form onSubmit={e => this.handleOnSubmit(e)} className="main__filter-price--filter">
                <input maxLength={4} type="text" className="main__filter-price--filter-down" value={this.state.value.min} onChange={e => this.handleValueMin(e)}/>
                <input maxLength={4} type="text" className="main__filter-price--filter-up" value={this.state.value.max<=this.state.value.min? this.state.valueInput.max : this.state.value.max} onChange={e => this.handleValueMax(e)}/>
                <button type="submit" className="main__filter-price--filter-btn">Filter</button>
            </form>
        </div>
    }
}
