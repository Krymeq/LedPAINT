import React from 'react';
import Cell from './Cell.js';

class MatrixRow extends React.Component
{
    render(){
        let cells = []
        for(let i = 0; i < 32; i++){
            cells[i] = <Cell
                            key = {`cell${i}`}
                            colnum = {this.props.colnum}
                            rownum = {i} 
                            color = {this.props.colors[i]} 
                            click = {this.props.handleClick}
                        />
        }
        return(
            <div className = "matrix-row-container">
                {cells}
            </div>
        )
    }
}

export default MatrixRow;
