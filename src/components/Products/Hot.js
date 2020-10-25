import React, {Component} from 'react';
import Mac from '../Images/mac.png';
import Stars from '../Images/stars.png'
import Cart from '../Images/circlecart.png';
import Cart1 from '../Images/cart_2.png';
import Heart from '../Images/circleheart.png';
import Heart2 from '../Images/hearts.png';
import FilledHeart from '../Images/filledheart.png';
import FilledCart from '../Images/filledcart.png';
import Beats from '../Images/beats.png';
import Button from '../Button/Button.js'
import './Products.css'
import '../Button/Button.css'

class Hot extends Component{
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
          hot: '',
          containerModal: 'container-modal',
        }
    } 
    componentDidMount(){
        this.getClassList()
    }
    getClassList=()=>{
        if(this.props.horizontal){
            this.setState({bottomContainer: 'row-bottom', classListContainer:'horizontal', line:''})
        }
        if(this.props.hot){
            this.setState({hot:'HOT', containerModal:'container-modal-hot', classListContainer:'horizontal-hot'})
        }
    }

    onHover = (e)=>{
        if(this.props.faded){
            this.setState({classListImage: 'mac-modal', classListModal:'modal-faded'})
        }else if(this.props.beats){
            this.setState({classListImage: 'mac-modal', classListModal:'beats-modal'})
        }else
        this.setState({classListImage: 'mac-modal', classListModal:'modal-display'})

    }

    onExit = (e)=> {
       this.setState({classListImage:'mac', classListModal:'modal'})
    }

    render(){
        return(<div className={this.state.classListContainer}> 
            <p className = {this.state.hot}>{this.state.hot}</p>
            <div className={this.state.containerModal} onMouseEnter={(e)=>{
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
                <div className='reviews'>
                    <img src={Stars} className='stars'/>
                    <p className="zero-review">0 reviews</p>
                    <p className='submit-review'>Submit a review</p>
                </div>
                <div className='cost-holder'>
                    <p className='cost'>{this.props.cost}</p>
                    <p className='cost1'>{this.props.cost2}</p>
                </div>
                <p className='description'>{this.state.description}</p>
                <div className = 'button-section'>
                    <Button image2 = {Cart1} label = 'Add To Cart'type='cart' fav/>
                    <p className='padding-div'></p>
                    <Button image = {Heart2} type='heart'/>
                </div>
            </div>
        </div>
        )
    }
}

export default Hot;