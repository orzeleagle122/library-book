import React from 'react';
import {storiesOf} from '@storybook/react';
import Sidebar from './Sidebar';
import StoryRouter from 'storybook-react-router';
import { Provider } from 'react-redux';

storiesOf('Organisms/SiteBar', module)
    .addDecorator((story) => {
    return <Provider story={story()} />;
    })
    .addDecorator(StoryRouter())
    .add('Sidebar',()=><Sidebar />);