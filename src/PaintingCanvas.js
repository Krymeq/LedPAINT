import React from 'react';
import MatrixRow from './MatrixRow';

function updateArray(arr, newValue, x, y)
{
    let res = arr;
    console.log(res[x][y], newValue);
    res[x][y] = newValue;
    console.log(res[x][y]);
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
            colors: arr
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(colnum, rownum)
    {
        console.log(colnum, rownum, this.props.color);
        this.setState({
            colors: updateArray
                (this.state.colors, 
                 this.props.color, 
                 colnum, 
                 rownum)
        });
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
        <div className = 'canvas'>
            {rows}
        </div>)
    }
}

export default PaintingCanvas;