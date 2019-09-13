import * as React from 'react'

export class ApiComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {};
    }

    async getDataFromAPI(){       
       this.setState({value: await fetch("https://jsonplaceholder.typicode.com/todos/1")
       .then((response) => {
           return response.json();
       }).then((json) => {
           return JSON.stringify(json)
       })});
    }

    render(){
        return<>
            <button onClick={() => {this.getDataFromAPI()}}>Kliknij mnie!</button>
            <br></br>
            <div>
                {this.state.value}
            </div>
        </>
    }
}