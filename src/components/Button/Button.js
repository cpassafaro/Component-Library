import React from 'react';
import './Button.css'

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = '';

    let types = ['primary', 'danger', 'success', 'warning', 'default', 'heart', 'cart']

    if(types.includes(props.type)){
        classList+= `button-${props.type}`
    }

    if(props.large){
        classList+= ` button-${props.type}-large`
    }

    if(props.outline){
        classList += ` button-${props.type}-outline`
    }

    if(props.faded){
        classList += ` button-${props.type}-faded`
    }

    if(props.fav){
        classList += ` button-${props.type}-fav`
    }

  
  return(
    <button className={classList}>
        <img src= {props.image}/>
        <img src= {props.image2} className='image2'/>
        {props.label}
    </button>
  )
}

export default Button; 