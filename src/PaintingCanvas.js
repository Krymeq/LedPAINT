import React from 'react';
import MatrixRow from './MatrixRow';

function updateArray(arr, newValue, x, y)
{
    let res = arr;
    res[x][y] = newValue;
    return res;    
}

class PaintingCanvas extends React.Component {  
    constructor(props){
        let arr = []
        for(let i = 0; i < 16; i++){
            
            arr[i] = [];
            for(let j = 0; j < 32; j++){
                arr[i][j] = "#aaaaff";
            }
        }

        super(props);
        this.state = {
            colors: arr,
            draw : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(colnum, rownum, singleClick)
    {
        if(this.state.draw || singleClick){
            this.setState({
                colors: updateArray
                    (this.state.colors, 
                     this.props.color, 
                     colnum, 
                     rownum)
            });
        }
    }

    render()
    {
        let rows = []; 
        for(let i = 0; i < 16; i++){
            rows[i] = <MatrixRow
                        key = {`col${i}`}
                        colnum = {i}
                        handleClick = {this.handleClick}
                        colors = {this.state.colors[i]}/>;
        }
        return(
        <div className = 'canvas'
            onMouseDown = {() => this.setState({draw : true})}
            onMouseUp = {() => this.setState({draw : false})}>
            {rows}
        </div>)
    }
}

export default PaintingCanvas;