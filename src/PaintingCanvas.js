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
                arr[i][j] = "#000000";      // #4a90ea
            }
        }

        super(props);
        this.state = {
            colors: arr,
            draw : false
        }

        this.handleClick = this.handleClick.bind(this);
        this.sendData = this.sendData.bind(this);
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

    sendData(){
        let that = this;
        console.log("wywołanko");
        fetch('http://192.168.1.85:5000', 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(that.state.colors)
        })
        .catch(() => console.log("no zjebało się no"));
        this.setState({draw: false});
    }

    render()
    {
        let rows = []; 
        for(let i = 0; i < 16; i++){
            rows[i] = 
            <MatrixRow
             key = {`col${i}`}
             colnum = {i}
             handleClick = {this.handleClick}
             colors = {this.state.colors[i]}
            />;
        }
        return(
        <div className = 'canvas'
            onMouseDown = {() => this.setState({draw : true})}
            onMouseUp = {this.sendData}
            onTouchStart = {() => this.setState({draw: true})}
            onTouchEnd = {() => this.setState({draw: false})}>
            {rows}
        </div>)
    }
}

export default PaintingCanvas;