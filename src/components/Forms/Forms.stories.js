import React from 'react';
import { storiesOf } from '@storybook/react';
import Forms from './Forms';


storiesOf('Forms', module)
    //input fields
    .add("Email Input", () => <Forms label='Email' />)