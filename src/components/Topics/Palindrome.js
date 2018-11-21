import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state ={
            userInput: '',
            palindrome: ''
        }
        this.userInput = this.userInput.bind(this);
        this.palinCheck = this.palinCheck.bind(this);
    }
    userInput(event){
        this.setState({
            userInput: event.target.value

        })

    }
    palinCheck(){
        const inputted = this.state.userInput;
        let backward='';
        const backwardArray =[]
        for (let i = 0; i < inputted.length; i++){
            backwardArray.unshift(inputted.charAt(i));
        }
        for (let j = 0; j < backwardArray.length; j++){
            backward +=backwardArray[j];
        }
        // debugger
        inputted === backward
        ? this.setState({palindrome : 'True'})
        : this.setState({palindrome : 'False'})

    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.userInput}></input>
                <button className="confirmationButton" onClick={this.palinCheck}>Flip this ish</button>
                <span className="resultsBox">Palindrom: {this.state.palindrome}</span>
            
            
            </div>



        )
    }
}

export default Palindrome