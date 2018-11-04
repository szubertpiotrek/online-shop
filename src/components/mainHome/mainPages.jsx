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
            page: 1
        }
    }

    handleOnClickRight = () => {
        if(Math.ceil(this.props.pages)>this.state.page){
            this.setState({
                page: this.state.page+1
            });
            if(typeof this.props.page==='function'){
                this.props.page(this.state.page+1);
            }
        }
    };

    handleOnClickPage = (e,i) => {
        this.setState({
            page: i
        });
        if(typeof this.props.page==='function'){
            this.props.page(i);
        }
    };

    render(){
        let pages=[];
        for(let i=1; i<=Math.ceil(this.props.pages);i++){
            pages = [...pages,i];
        }

        const page = pages.map((el,i)=>{
           return <span key={i} className="main__pages--item" style={this.state.page===i+1? {color: "rgb(0, 0, 0)"} : null}
                        onClick={e =>this.handleOnClickPage(e,i+1)}>
                    {el.toString().length===1? `0`+el : el}
                  </span>
        });

        return <div className="main__pages">
            {page}
            <div className="main__pages--arrow" onClick={this.handleOnClickRight}>
                <FontAwesomeIcon icon="arrow-right"/>
            </div>
        </div>
    }

}