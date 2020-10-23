import React,{Component} from 'react';
import './Forms.css'


const Selectors = props => {
  let classList = ''

  let types = ['input', 'select', 'faded']

  if(types.includes(props.type)){
      classList+= `${props.type}`
  }

  if(props.faded){
      classList += ` ${props.type}-faded`
  }

  return(<option className = {classList}>{this.props.label}</option>
  )
}


export default Selectors;