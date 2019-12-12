import React from 'react'

class Cell extends React.Component
{   
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click(this.props.colnum, this.props.rownum, );
    }

    render(){
        return(
            <div className = 'cell' 
                 style = {{backgroundColor: this.props.color}} 
                 onClick = {this.handleClick}/>
        );
    }
}

export default Cell;