import React from 'react';
import { storiesOf } from '@storybook/react';
import Heart from '../Images/hearts.png';
import Cart from '../Images/cart_2.png';
import Button from './Button';


storiesOf('Button', module)
    //primary buttons
    .add('Primary', () => <Button label="Do something" type='primary'/>)
    .add('Primary Outline', () => <Button label="Do something" type='primary' outline/>)
    .add('Primary Faded', () => <Button label='Do something' type='primary' faded/>)
    .add('Primary Large', () => <Button label="Do something" type='primary' large/>)
    .add('Primary Outline Large', () => <Button label="Do something" type='primary' large outline />)
    .add('Primary Faded Large', () => <Button label="Do something" type='primary' large faded />)
    //danger buttons
    .add('Danger', () => <Button label="Do something" type='danger'/>)
    .add('Danger Outline', () => <Button label="Do something" type='danger' outline/>)
    .add('Danger Faded', () => <Button label='Do something' type='danger' faded/>)
    .add('Danger Large', () => <Button label="Do something" type='danger' large/>)
    .add('Danger Outline Large', () => <Button label="Do something" type='danger' large outline />)
    .add('Danger Faded Large', () => <Button label="Do something" type='danger' large faded />)
    //success buttons
    .add('Success', () => <Button label="Do something" type='success'/>)
    .add('Success Outline', () => <Button label="Do something" type='success' outline/>)
    .add('Success Faded', () => <Button label='Do something' type='success' faded/>)
    .add('Success Large', () => <Button label="Do something" type='success' large/>)
    .add('Success Outline Large', () => <Button label="Do something" type='success' large outline />)
    .add('Success Faded Large', () => <Button label="Do something" type='success' large faded />)
    //warning buttons
    .add('Warning', () => <Button label="Do something" type='warning'/>)
    .add('Warning Outline', () => <Button label="Do something" type='warning' outline/>)
    .add('Warning Faded', () => <Button label='Do something' type='warning' faded/>)
    .add('Warning Large', () => <Button label="Do something" type='warning' large/>)
    .add('Warning Outline Large', () => <Button label="Do something" type='warning' large outline />)
    .add('Warning Faded Large', () => <Button label="Do something" type='warning' large faded />)
    //default buttons
    .add('Default', () => <Button label="Do something" type='default'/>)
    .add('Default Outline', () => <Button label="Do something" type='default' outline/>)
    .add('Default Faded', () => <Button label='Do something' type='default' faded/>)
    .add('Default Large', () => <Button label="Do something" type='default' large/>)
    .add('Default Outline Large', () => <Button label="Do something" type='default' large outline />)
    .add('Default Faded Large', () => <Button label="Do something" type='default' large faded />)

    ///hearts and carts buttons
    .add('Heart', () => <Button image = {Heart} type='heart'/>)
    .add('Cart', () => <Button image = {Cart} type='cart'/>)
    .add('Heart Favorites', () => <Button image2 = {Heart} label='Add To Favorites' type='heart' fav/>)
    .add('Cart Add', () => <Button image2 = {Cart} label = 'Add To Cart'type='cart' fav/>)






