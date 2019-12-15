import React from 'react';
import {SketchPicker} from 'react-color'
import PaintingCanvas from './PaintingCanvas';

class ColorPlane extends React.Component
{
    constructor(props){
        super(props);
        
        let initialColor = '#00ff00';

        this.state = {
            color: initialColor
        }

        this.handleChangeColorComplete = this.handleChangeColorComplete.bind(this);
    }

    handleChangeColorComplete(color) {
        this.setState({ color: color.hex });
    };

    render(){
        return(
        <div className = "colorplane-container">
            <div className = "colorplane-container-inner">
                <SketchPicker 
                    color = {this.state.color}
                    onChangeComplete = {this.handleChangeColorComplete}
                    />
            </div>
            <div className = "colorplane-container-inner">
                <PaintingCanvas color = {this.state.color}/>
            </div>
        </div>);
    }
}

export default ColorPlane;