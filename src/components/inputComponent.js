import * as React from 'react'
import { ForLoopComponent } from './forLoopComponent';

export class InputComponent extends React.Component{
    
    constructor(){
        super();        
    }

    setRenderCount(num){
        this.props.setRenderCount(num)
    }
    
    render(){
        return<>

            <input style={{color: "red"}} type="text" onKeyUp={(e) => this.setRenderCount(e.target.value)}></input>
            <br></br>
            
        </>
    }
}