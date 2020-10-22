import React from 'react';
import './Forms.css'

const Forms = props => {
    let {placeholder, label} = props;

    console.log(props.placeholder != false)
    let classList = ''

    let types = ['input', 'dropdown']

    if(types.includes(props.type)){
        classList+= `button-${props.type}`
    }

    if(props.placeholder == undefined){
        placeholder = props.label
    }

    return(<div> {label}
        <input className={classList} placeholder = {placeholder}/>
    </div>
      )
}

export default Forms;

// Forms.defaultProps = {
//     placeholder: {label},
//   };

// onChange= {() => placeholder = {props.placeholder}}