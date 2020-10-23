import React from 'react';
import { storiesOf } from '@storybook/react';
import VerticalProduct from './VerticalProduct'
import './Products.css';

//example 
storiesOf('Products', module)
    //input fields
    .add("Vertical Products", () => <VerticalProduct product='Apple Macbook Pro' cost='$499' cost2='$599'/>)
    .add("Vertical Products Faded", () => <VerticalProduct product='Apple Macbook Pro' faded cost='$499' cost2='$599'/>)

