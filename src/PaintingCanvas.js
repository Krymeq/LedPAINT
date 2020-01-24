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
        this.fillCanvas = this.fillCanvas.bind(this);
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

    fillCanvas(){
        let arr = [];
        for(let i = 0; i < 16; i++){         
            arr[i] = [];
            for(let j = 0; j < 32; j++){
                arr[i][j] = this.props.color;      // #4a90ea
            }
        }
        this.setState({
            colors: arr
        }, () => this.sendData());
    }

    sendData(){
        let that = this;
        fetch('http://192.168.43.24:5000', 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(that.state.colors)
        })
        .catch(() => console.log("popsuło się"));
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
        <div className = 'canvas-container'>
            <div className = 'canvas'
                onMouseDown = {() => this.setState({draw : true})}
                onMouseUp = {this.sendData}
                onTouchStart = {() => this.setState({draw: true})}
                onTouchEnd = {() => this.setState({draw: false})}>
                {rows}
            </div>
            <div className = 'button'
                 onClick = {this.fillCanvas}>
                <img src = "paintbucket.png" alt = 'Fill canvas'></img>
            </div>
        </div>)
    }
}

export default PaintingCanvas;