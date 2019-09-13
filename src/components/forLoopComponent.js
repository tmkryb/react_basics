import * as React from 'react'


export class ForLoopComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {};
    }
    
    
    mnozenie(num){
        return <p>{2 * num}</p>;
      }
    
      wypiszText(text){
        return text
      }
    
      
    
      renderDivs(times){
        let result = [];
        for(let i = 0; i < times; i++){
          result.push(<div>{i+1}</div>)
        }
        return result;
      }
    
      render(){
        return (<>
          For Loop
          {this.renderDivs(this.props.num)}
          <div>{this.wypiszText("Tutaj jest jakiś")}</div>
        </>
        )
      }
}