import React, {Component} from 'react';
import Mac from '../Images/mac.png';
import Stars from '../Images/stars.png'
import Cart from '../Images/circlecart.png';
import Heart from '../Images/circleheart.png';
import FilledHeart from '../Images/filledheart.png';
import FilledCart from '../Images/filledcart.png';
import Beats from '../Images/beats.png'
import './Products.css'

class VerticalProduct extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
          classListImage: 'mac',
          classListModal: 'modal',
          classListContainer: 'container',
          heart: Heart,
          cart: Cart,
          bottomContainer: 'bottom-container',
          line: 'line',
          mac: Mac,
          description: props.description,
        }
    } 
    componentDidMount(){
        this.getClassList()
    }
    getClassList=()=>{
        if(this.props.faded){
            this.setState({classListContainer: 'faded', heart: FilledHeart, cart:FilledCart})
        }
        if(this.props.horizontal){
            this.setState({bottomContainer: 'row-bottom', classListContainer:'horizontal', line:''})
        }
        if(this.props.horizontal && this.props.faded){
            this.setState({bottomContainer: 'row-bottom', classListContainer:'horizontal-faded', line:''})
        }
        if(this.props.beats){
            this.setState({bottomContainer: 'row-bottom', classListContainer:'horizontal-faded', line:'', mac:Beats})
        }
        if(this.props.hot){
            this.setState({classListContainer:'hot', })
        }
    }

    onHover = (e)=>{
        if(this.props.faded){
            this.setState({classListImage: 'mac-modal', classListModal:'modal-faded'})
        }else{
            this.setState({classListImage: 'mac-modal', classListModal:'modal-display'})
        }
    }

    onExit = (e)=> {
       this.setState({classListImage:'mac', classListModal:'modal'})
    }

    render(){
        return(<div className={this.state.classListContainer}> 
            <div onMouseEnter={(e)=>{
                this.onHover(e)
                }} onMouseLeave={(e)=>{
                    this.onExit(e)
                }}>
                <img src={this.state.mac} className={this.state.classListImage}/>
                <div className={this.state.classListModal}>
                    <img src={this.state.cart} className='cart'/>
                    <img src={this.state.heart} className='heart'/>
                </div>
            </div>
            <div className={this.state.bottomContainer}>
                <div className={this.state.line}></div>
                <p className='product'>{this.props.product}</p>
                <img src={Stars}/>
                <div className='cost-holder'>
                    <p className='cost'>{this.props.cost}</p>
                    <p className='cost1'>{this.props.cost2}</p>
                </div>
                <p>{this.state.description}</p>
            </div>
        </div>
        )
    }
}

export default VerticalProduct;

