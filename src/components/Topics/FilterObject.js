import React, {Component} from 'react';

class FilterObjects extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: [
                {Name: 'Brad', Age: 36, User: 'dollartaco'},
                {Name: 'Maggie', Occupation: 'Boss', User: 'Ahpo84'}],
            userInput: "",
            filteredArray: []
        }
        this.updateUserInput = this.updateUserInput.bind(this);
        this.filtering = this.filtering.bind(this);
    }
    updateUserInput(event){
        console.log('event',event.target.value)
        this.setState({
            userInput : event.target.value

        })}
    filtering(){
        // const unfiltered = this.state.unfilteredArray;
        const filtered = [];
        const inputted = this.state.userInput;
        for (let i=0; i <this.state.unfilteredArray.length; i++){
            // debugger
            if (this.state.unfilteredArray[i][inputted]){
                filtered.push(this.state.unfilteredArray[i]);
                // debugger
            }
        }
        // debugger
        return this.setState({filteredArray: filtered})
        }
    
    
    render(){
        // console.log('user input',this.state.userInput)
        // console.log(this.state.filteredArray)
        // console.log('filtered',this.state.filteredArray)
        
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <p>{JSON.stringify(this.state.unfilteredArray)}</p>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={this.updateUserInput}></input>
                <button className="confirmationButton" onClick={this.filtering}
                >Run it</button>
                <span className="resultsBox filterObjectRB">
                {JSON.stringify(this.state.filteredArray)}
                </span>




            </div>



        )
    }
}

export default FilterObjects