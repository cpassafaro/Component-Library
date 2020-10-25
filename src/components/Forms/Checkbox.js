import React, {Component} from 'react';
import './Forms.css'

class Checkbox extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            classList: props.type,
            // label:props.label
        }
    
    } 

    setClass= (e) => {   
        console.log(e.target.classList)
        let interalClass = e.target.classList.value
            if(interalClass == 'checkbox'){
                console.log('worked')
                e.target.classList.remove('checkbox')
                e.target.classList.add('checked')
            }else if(interalClass =='checked'){
                console.log('uncheck')
                e.target.classList.remove('checked')
                e.target.classList.add('checkbox')
            }else if(interalClass == 'dark'){
                e.target.classList.remove('dark')
                e.target.classList.add('checked-dark')
            }else if(interalClass == 'checked-dark'){
                e.target.classList.remove('checked-dark')
                e.target.classList.add('dark')
            }

        }

    render(){
        console.log(this.state.classList)
        return(<div className='container-for-checkbox'> 
            <div className={this.state.classList} onClick ={this.setClass}>
                ✓
            </div>
            <p className='words'>{this.props.label}</p>
        </div>
        )
    }
}

export default Checkbox;