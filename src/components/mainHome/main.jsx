import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import {MainCategory} from "./mainCategory.jsx";
import {MainFilterPrice} from "./mainFilterPrice.jsx";
import {MainFilterColor} from "./mainFilterColor.jsx";
import {MainFilterSize} from "./mainFilterSize.jsx";
import {MainFilterBrands} from "./mainFilterBrands.jsx";
import {MainTags} from "./mainTags.jsx";
import {MainPages} from "./mainPages.jsx";


export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            select: "A-Z",
            showingElements: [],
            allElements: [1,2,3,4,5,6],
            priceUp: 1000,
            priceDown: 0,
            priceMax: 1200
        }
    }

    componentDidMount(){
        if ( typeof this.props.shop === 'function' ){
            this.props.shop(this.shop);
        }
    }

    handleOnSelect = (e) => {
        this.setState({
            select: e.target.value
        })
    };

    filterUpPrice = (priceUp) => {
        this.state.priceUp=priceUp;
        console.log(priceUp)
    };

    filterDownPrice = (priceDown) => {
        this.state.priceDown=priceDown;
        console.log(priceDown)
    };

    render(){
        const ShopList = this.state.allElements.map((el,i) => {
            return <div key={i} className="main__elements--item">
                <div className="main__elements--item-background">
                    <div className="main__elements--item-info1">
                        <div className="main__elements--item-new">New</div>
                        <div className="main__elements--item-like">photo</div>
                    </div>
                    <div className="main__elements--item-info2">
                        <div className="main__elements--item-name">Flowers</div>
                        <div className="main__elements--item-info3">
                            <div className="main__elements--item-price">cena</div>
                            <div className="main__elements--item-add">Add</div>
                        </div>
                    </div>
                </div>
            </div>
        });
        
        return <section ref={shop => { this.shop = shop }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className="main__category--info">Category</h2>
                        <MainCategory/>
                        <hr className="main__category--line"/>
                        <h2 className="main__category--info">Filter by</h2>
                        <MainFilterPrice priceUp={this.filterUpPrice} priceDown={this.filterDownPrice} priceMax={this.state.priceMax}/>
                        <MainFilterColor/>
                        <MainFilterSize/>
                        <MainFilterBrands/>
                        <hr className="main__category--line"/>
                        <h3 className="main__category--info">Popular Tags</h3>
                        <MainTags/>
                    </div>
                    <div className="col-lg-9">
                        <div className="main__show-info">
                            <label className="main__show-info--label">Sort by:
                                <select onChange={e => this.handleOnSelect(e)} value={this.state.select} className="main__show-info--select" style={this.state.select!=="A-Z" ?{width:"120px"}: null}>
                                    <option value="A-Z" className="main__show-info--option">A-Z</option>
                                    <option value="Lowest Price" className="main__show-info--option">Lowest Price</option>
                                    <option value="Highest Price" className="main__show-info--option">Highest Price</option>
                                </select>
                            </label>
                            <span className="main__show-info--lenght">Showing 1-{this.state.showingElements.lenght} of {this.state.allElements.length} results</span>
                        </div>
                        <div className="main__elements">
                            {ShopList}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <MainPages/>
                    </div>
                </div>
            </div>
        </section>
    }
}


