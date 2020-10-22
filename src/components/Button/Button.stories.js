import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" type='primary'/>)
    .add('Success', () => <Button label="Success" type='success'/>) 
    .add('Primary', () => <Button label="Large Primary Button" type='primary' large/>)



    .add('Danger', () => <Button label="Danger" type='danger' outline/>) 
    .add('Warning', () => <Button label="Warning" type='warning'/>) 
