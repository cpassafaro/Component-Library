import React, {Component} from 'react';
import './Forms.css'



class Voucher extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            label: props.label,
            placeholder: props.placeholder,
            classListOuter: '',
            input: ''
        }
    }
    //this captures the changes that the user is making to the input field
    getInput = e => {
        const value = e.target.value
        console.log(value)
        this.setState({input:value})
       }

    componentDidMount(){
        this.getClassList()
    }

    getClassList = () => {
        // console.log(this.props)
        let classList = 'voucher'

        let types = ['large', 'small',]
    
        if(this.props.large){
            classList += ` large`
        }

        if(this.props.small){
            classList+= ` small`
        }
        console.log(classList)
        // this.state.classListOuter = classList
        this.setState({classListOuter:classList})
    }

    render (){
        console.log(this.state.classListOuter)
        return(<form className={this.state.classListOuter} onClick={(e)=>{e.preventDefault()}}> 
            <input placeholder={this.state.placeholder} onChange={this.getInput}/>
            <button onClick={()=>{this.props.onClick(this.state.input)}}>{this.state.label}</button>
        </form>
      )}
}

export default Voucher;