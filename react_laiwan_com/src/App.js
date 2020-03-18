/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import BackgroundImage from 'react-background-image';
import { Button, Drawer } from '@material-ui/core';
import placeholder from './source/bg_ios.png';
import hdImage from './source/bg_web.jpg';
import './view/style/home.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
        };
    }

    componentDidMount() {
        //
    }


    render() {
        const { drawer } = this.state;
        return (
            <BackgroundImage
                placeholder={placeholder}
                src={hdImage}
                className="background"
            >
                <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            </BackgroundImage>
        );
    }
}
