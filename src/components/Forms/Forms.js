import React from 'react';
import './Forms.css'

const Forms = props => {
    let {placeholder, label} = props;

    let classList = ''

    let types = ['input', 'select']

    if(types.includes(props.type)){
        classList+= `input-${props.type}`
    }

    if(props.placeholder == undefined){
        placeholder = props.label
    }

    return(<form className={classList}> {label}
        <input className = {classList, 'interior'} placeholder = {placeholder} 
        onClick/>
    </form>
      )
}

export default Forms;

