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
import {MainDisplayElements} from "./mainDisplayElements.jsx";


export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            priceUp: 1000,
            priceDown: 0,
            priceMax: 1200,
            /////////////
            shopItems: [],
            displayShopItems: [],
            /////////////
            allProd: [],
            living: [],
            dining: [],
            furniture: [],
            lighting: [],
            technics: [],
            accessories: [],
            /////////////
            sizeS: [],
            sizeM: [],
            sizeL: [],
            /////////////
            colors: [],
            /////////////
            bower: [],
            braun: [],
            elevenPlus: [],
            field: [],
            menu: [],
            /////////////
            category: "allprod",
            size: "",
            brand: "",
            page: 1,
            pages: 1
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/products`).then(resp => resp.json()).then(products => {
            let productsSort = products.sort((a,b)=>{
                return (a.name).localeCompare(b.name);
            });
            productsSort.forEach((el,i) => {
                this.setState({
                    shopItems: [...this.state.shopItems,el],
                    displayShopItems: [...this.state.displayShopItems,el],
                    pages: productsSort.length/6
                });
                switch (el.category) {
                    case "allprod": {
                        this.setState({
                            allProd: [...this.state.allProd, el]
                        });
                        break;
                    }
                    case "living": {
                        this.setState({
                            living: [...this.state.living, el]
                        });
                        break;
                    }
                    case "dining": {
                        this.setState({
                            dining: [...this.state.dining, el]
                        });
                        break;
                    }
                    case "furniture": {
                        this.setState({
                            furniture: [...this.state.furniture, el]
                        });
                        break;
                    }
                    case "lighting": {
                        this.setState({
                            lighting: [...this.state.lighting, el]
                        });
                        break;
                    }
                    case "technics": {
                        this.setState({
                            technics: [...this.state.technics, el]
                        });
                        break;
                    }
                    case "accessories": {
                        this.setState({
                            accessories: [...this.state.accessories, el]
                        });
                        break;
                    }
                }
                el.size.forEach((size)=> {
                    switch (size) {
                        case "S": {
                            this.setState({
                                sizeS: [...this.state.sizeS, el]
                            });
                            break;
                        }
                        case "M": {
                            this.setState({
                                sizeM: [...this.state.sizeM, el]
                            });
                            break;
                        }
                        case "L": {
                            this.setState({
                                sizeL: [...this.state.sizeL, el]
                            });
                            break;
                        }
                    }
                });
                switch (el.brand) {
                    case "bower": {
                        this.setState({
                            bower: [...this.state.bower, el]
                        });
                        break;
                    }
                    case "braun": {
                        this.setState({
                            braun: [...this.state.braun, el]
                        });
                        break;
                    }
                    case "elevenPlus": {
                        this.setState({
                            elevenPlus: [...this.state.elevenPlus, el]
                        });
                        break;
                    }
                    case "field": {
                        this.setState({
                            field: [...this.state.field, el]
                        });
                        break;
                    }
                    case "menu": {
                        this.setState({
                            menu: [...this.state.menu, el]
                        });
                        break;
                    }
                }
            })
        });
        if ( typeof this.props.shop === 'function' ){
            this.props.shop(this.shop);
        }
    }

    filterUpPrice = (priceUp) => {
        this.setState({
            priceUp: priceUp,
        })
    };
    filterDownPrice = (priceDown) => {
        this.setState({
            priceDown: priceDown,
        })
    };

    clickCategory = (category) => {
        this.setState({
            category: category
        })
    };

    clickColors = (colors) => {
        this.setState({
            colors: colors
        })
    };

    clickSize = (size) => {
        this.setState({
            size: size
        })
    };

    clickBrand = (brand) => {
        this.setState({
            brand: brand
        })
    };

    otherPage = (page) => {
        console.log(page);
        this.setState({
            page: page
        })
    };

    render(){
        let filteredShopItems = this.state.shopItems.filter((el) => {
            if(el.category===this.state.category){
                return el;
            }
        }).filter((el) => {
            if(el.price>=this.state.priceDown && el.price<=this.state.priceUp){
                return el
            }
        }).filter((el) => {
            let filterEl = [];
            this.state.colors.forEach((color => {
                el.color.forEach((colors)=>{
                    if(colors===color){
                        filterEl=[...filterEl,el]
                    }
                })
            }));
            return filterEl;
        }).filter((el) => {
            let filterEl = [];
                el.size.forEach((sizes)=>{
                    if(this.state.size===sizes){
                        filterEl=[...filterEl,el]
                    }
                });
            return filterEl
        }).filter((el) => {
            let filterEl = [];
            if(el.brand===this.state.brand){
                filterEl=[...filterEl,el]
            }
            return filterEl
        });

        return <section ref={shop => { this.shop = shop }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className="main__category--info">Category</h2>
                        <MainCategory allProd={this.state.shopItems.length} living={this.state.living.length} dining={this.state.dining.length}
                                      furniture={this.state.furniture.length} lighting={this.state.lighting.length}
                                      technics={this.state.technics.length} accessories={this.state.accessories.length} category={this.clickCategory}
                        />
                        <hr className="main__category--line"/>
                        <h2 className="main__category--info">Filter by</h2>
                        <MainFilterPrice priceUp={this.filterUpPrice} priceDown={this.filterDownPrice} priceMax={this.state.priceMax}/>
                        <MainFilterColor colors={this.clickColors}/>
                        <MainFilterSize sizeS={this.state.sizeS.length} sizeM={this.state.sizeM.length}
                                        sizeL={this.state.sizeL.length} size={this.clickSize}
                        />
                        <MainFilterBrands bower={this.state.bower.length} braun={this.state.braun.length}
                                          elevenPlus={this.state.elevenPlus.length} field={this.state.field.length}
                                          menu={this.state.menu.length} brand={this.clickBrand}
                        />
                        <hr className="main__category--line"/>
                        <h3 className="main__category--info">Popular Tags</h3>
                        <MainTags/>
                    </div>
                    <div className="col-lg-9">
                        <MainDisplayElements shopItems={filteredShopItems} page={this.state.page}/>
                    </div>
                    <div className="col-lg-12">
                        <MainPages pages={this.state.pages} page={this.otherPage}/>
                    </div>
                </div>
            </div>
        </section>
    }
}


