import React from 'react';
import Heading from './Heading';
import {storiesOf} from '@storybook/react';


storiesOf("Atoms/Heading", module)
.add('Primary',()=><Heading>Hello Patrick</Heading>)