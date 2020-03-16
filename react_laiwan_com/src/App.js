import React, { Component } from 'react';
import BackgroundImage from 'react-background-image';
import placeholder from './source/bg_ios.png';
import hdImage from './source/bg_web.jpg';
import './view/style/home.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        //
    }


    render() {
        return (
            <BackgroundImage
                placeholder={placeholder}
                src={hdImage}
                className="background"
            />
        );
    }
}
