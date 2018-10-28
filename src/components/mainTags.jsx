import React from 'react';
import ReactDOM from 'react-dom';

export class MainTags extends React.Component{

    constructor(props){
        super(props);
        this.state = ({
            tags: ["medium", "large", "small", "medium", "large", "small"]
        })
    }

    render(){

        const tags = this.state.tags.map((el,i)=>{
            return <span key={i} className="main__tags--text"><span>#{el}</span></span>
        });

        return <div className="main__tags">
            {tags}
        </div>
    }
}
