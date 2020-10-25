import React from 'react';
import { storiesOf } from '@storybook/react';
import VerticalProduct from './VerticalProduct';
import './Products.css';
import Hot from './Hot';

//example 
storiesOf('Products', module)
    //input fields
    .add("Vertical Products", () => <VerticalProduct product='Apple Macbook Pro' cost='$499' cost2='$599'/>)
    .add("Vertical Products Faded", () => <VerticalProduct product='Apple Macbook Pro' faded cost='$499' cost2='$599'/>)
    .add("Vertical Products Horizontal", () => <VerticalProduct product='Apple Macbook Pro' horizontal cost='$499' cost2='$599'/>)
    .add("Vertical Products Horizontal Faded", () => <VerticalProduct product='Apple Macbook Pro' horizontal faded cost='$499' cost2='$599'/>)
    .add("Vertical Products Horizontal Beats", () => <VerticalProduct product='Beats Solo2 Ear Headphones - Black' horizontal beats cost='$499' cost2='$599'/>)
    .add("Products Horizontal Hot", () => <Hot product='Beats Solo2 Ear Headphones - Black' horizontal hot cost='$499' cost2='$599' description = 
    'Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...'
     />)

