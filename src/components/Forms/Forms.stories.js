import React from 'react';
import { storiesOf } from '@storybook/react';
import Forms from './Forms';
import Dropdown from './Dropdown';


storiesOf('Forms', module)
    //input fields
    .add("Email Input", () => <Forms type='input' label='Email' />)

storiesOf('DropDown', module)
    .add('Dropdown', () => <Dropdown type="input" options = {['Select','year', 'make']}/>)
    .add('Dropdown Medium', () => <Dropdown type="input" medium options = {['Select','year', 'make']}/>)
    .add('Dropdown Small', () => <Dropdown type="input" small options = {['Select','year', 'make']}/>)
    .add('Dropdown Faded', () => <Dropdown type="input" faded options = {['Select','year', 'make']}/>)
    .add('Dropdown Faded Medium', () => <Dropdown type="input" faded medium options = {['Select','year', 'make']}/>)
    .add('Dropdown Faded Small', () => <Dropdown type="input" faded small options = {['Select','year', 'make']}/>)
