import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.number1Input = this.number1Input.bind(this);
        this.number2Input = this.number2Input.bind(this);
        this.solve = this.solve.bind(this);
    }
    number1Input(event){
        this.setState({
            number1 : parseInt(event.target.value,10)
        })
    }
    number2Input(event){
        this.setState({
            number2 : parseInt(event.target.value,10)
        })
    }
    solve(){
        this.setState({
            sum: this.state.number1 + this.state.number2
        })
    }
    render(){
        console.log('one',this.state.number1,'two',this.state.number2)
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.number1Input}></input>
                <input className="inputLine" onChange={this.number2Input}></input>
                <button className="confirmationButton" onClick={this.solve}>quick maffs</button>
                <span className="resultsBox">{this.state.sum}</span>
            
            
            </div>



        )
    }
}

export default Sum