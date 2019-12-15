import React from 'react'

class Cell extends React.Component
{   
    render(){
        return(
            <div className = 'cell' 
                 style = {{backgroundColor: this.props.color}}
                 onMouseOver = {() => this.props.click(this.props.colnum, this.props.rownum, false)}
                 onMouseDown = {() => this.props.click(this.props.colnum, this.props.rownum, true)}/>
        );
    }
}

export default Cell;