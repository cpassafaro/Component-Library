import React,{Component} from 'react';
import './Forms.css'


class Dropdown extends Component {
    constructor(props){
    super(props)
    
    console.log(props)

    this.state ={
        //this is where you the information you want to appear in the dropdown menu
        dropdown: props.options,
        dropDownElements: [],
        classListOuter: '',

    }
    this.createDropDown()
    this.getClassList()
    }



    createDropDown = () =>{
        //need empty array to push the state into to store the html elements
        let dropDownArrayHolder = [];
        //loop through each element in state to create an array
        this.state.dropdown.map(element => {
           dropDownArrayHolder.push(<option>{element}</option>) 
        })
        //is this cheating? idk
        this.state.dropDownElements = dropDownArrayHolder
    }

    getClassList = () => {
        // console.log(this.props)
        let classList = ''

        let types = ['input', 'select',]
    
        if(types.includes(this.props.type)){
            classList+= `${this.props.type}`
        }
    
        if(this.props.faded){
            classList += ` faded`
        }

        if(this.props.medium){
            classList += ` medium`
        }
        if(this.props.small){
            classList+= ` small`
        }
        this.state.classListOuter = classList
    }

    render(){

        return(<form>
            <select  className={this.state.classListOuter}> {this.state.dropDownElements}  
            </select>
        </form>
  )}
}


export default Dropdown;