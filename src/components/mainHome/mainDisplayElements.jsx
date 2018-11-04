import React from 'react';
import ReactDOM from 'react-dom';

export class MainDisplayElements extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            select: "A-Z",
            showingElements: []
        }
    }

    componentDidMount(){
        
    }

    handleOnSelect = (e) => {
        this.setState({
            select: e.target.value
        });
        if(e.target.value==="A-Z"){
            let tab = this.props.shopItems;
            tab.sort((a,b)=>{
                return (a.name).localeCompare(b.name);
            });
            this.setState({
                showingElements: tab
            })
        }
        else if(e.target.value==="lowestPrice"){
            let tab = this.props.shopItems;
            tab.sort((a,b)=>{
                return a.price - b.price;
            });
            this.setState({
                showingElements: tab
            })
        }
        else if(e.target.value==="highestPrice"){
            let tab = this.props.shopItems;
            tab.sort((a,b)=>{
                return b.price - a.price;
            });
            this.setState({
                showingElements: tab
            })
        }
    };

    render(){
        const ShopList = this.props.shopItems.map((el,i) => {
            if(6*(this.props.page-1)<=i && i<6*this.props.page){
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
            }
        });

        return <div>
                <div className="main__show-info">
                    <label className="main__show-info--label">Sort by:
                        <select onChange={e => this.handleOnSelect(e)} value={this.state.select} className="main__show-info--select" style={this.state.select!=="A-Z" ?{width:"120px"}: null}>
                            <option value="A-Z" className="main__show-info--option">A-Z</option>
                            <option value="lowestPrice" className="main__show-info--option">Lowest Price</option>
                            <option value="highestPrice" className="main__show-info--option">Highest Price</option>
                        </select>
                    </label>
                    <span className="main__show-info--lenght">Showing {6*(this.props.page-1)+1}-{6*this.props.page} of {this.props.shopItems.length} results</span>
                </div>
                <div className="main__elements">
                    {ShopList}
                </div>
            </div>
    }
}