import React, {Component} from 'react';

class EvensAndOdd extends Component {
    constructor(){
        super()
        this.state={
            evenArray : [],
            oddArray : [],
            userInput : '',
            userArray :[]
        }
    this.updateUserInput = this.updateUserInput.bind(this);
    this.solve = this.solve.bind(this);
    }
    
    
    updateUserInput(event){
        this.setState({
            userArray: event.target.value.split('')
        })
    }
    solve(){
        const userEvens = [];
        const userOdds = [];
        for (let i =  0 ; i <this.state.userArray.length; i++){
            if (this.state.userArray[i]%2 === 0) 
            {userEvens.push(this.state.userArray[i]);
            userEvens.push(",")}
            else if (this.state.userArray[i]%2 ===1) {userOdds.push(this.state.userArray[i]);
                userOdds.push(",")}

        }
        userOdds.pop();
        userEvens.pop();
        return this.setState({evenArray : userEvens,
        oddArray : userOdds})

    }


    render(){
        console.log('render',this.state.userArray, this.state.oddArray, this.state.evenArray)
        return(
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={this.updateUserInput}></input>
            <button className="confirmationButton" onClick={this.solve}>Solve this sumama bish</button>
            <span className="resultsBox">
            Evens: {this.state.evenArray}</span>
            <span className="resultsBox">
            Odds: {this.state.oddArray}</span>

            </div>



        )
    }
}

export default EvensAndOdd