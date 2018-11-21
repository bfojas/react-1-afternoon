import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray : ['ironman','hulk','cap','black widow','thor','hawkeye'],
            userInput : '',
            filteredArray :[]
        }
        this.userInput = this.userInput.bind(this);
        this.filterArray = this.filterArray.bind(this);
    }
    
    userInput(event){
        this.setState({
            userInput : event.target.value
        })
    }
    filterArray(){
        const filtered = [];
        const inputted = this.state.userInput;
        for (let i = 0; i < this.state.unfilteredArray.length; i++){
            if (this.state.unfilteredArray[i].includes(inputted)){
                filtered.push(this.state.unfilteredArray[i])
            }
        }
        return this.setState({filteredArray: filtered})
    }
    render(){
        return(
            <div className="puzzleBox filterSringPB">
                <h4>Filter String</h4>
                <p>{JSON.stringify(this.state.unfilteredArray)}</p>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={this.userInput}></input>
                <button className="confirmationButton" onClick={this.filterArray}>Filter dis ting</button>
                <span className="resultsBox filterStringsRB">{JSON.stringify(this.state.filteredArray)}</span>
            
            
            </div>



        )
    }
}

export default FilterString