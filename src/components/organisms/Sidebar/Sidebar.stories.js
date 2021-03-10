import React from 'react';
import {storiesOf} from '@storybook/react';
import Sidebar from './Sidebar';
import StoryRouter from 'storybook-react-router';

storiesOf('Organisms/SiteBar', module)
    .addDecorator(StoryRouter())
    .add('Sidebar',()=><Sidebar />);