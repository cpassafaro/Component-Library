import React, {Component} from 'react';
import './Forms.css'



class Counter extends Component {
    constructor(props){
        super(props)
        console.log(props.counter)
        this.state = {
            counter1: props.counter,
            max: props.max,
            min: props.min,
        }
    }
    
    increment = ()=>{
        let sum = this.state.counter1 +1
        if(sum <=this.state.max){
            this.setState({counter1: sum})
        }else{
            alert(`You've reached the max`)
        }
    }

    decrement = () =>{
        let sum = this.state.counter1 -1
        if(sum >=this.state.min){
            this.setState({counter1: sum})
        }else{
            alert(`You've reached the min`)
        }
    }

    render (props){
        return(<div className='counter'>
            <button onClick = {this.decrement} className='inc-dec'>-</button>
            <p>{this.state.counter1}</p>
            <button onClick = {this.increment} className='inc-dec'>+</button>
        </div>
      )}
}

export default Counter;