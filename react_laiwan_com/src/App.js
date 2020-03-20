/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import BackgroundImage from 'react-background-image';
import './view/style/home.css';
import bigPhone from './source/img-phone.png';
import smallPhone from './source/small-phone.png';
import logo from './source/logo.png';
// import './view/style/debug.css';

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
            <div className="container">
                <div className="navigation_bar">
                    <div className="row_center">
                        <img src={logo} className="logo" />
                        <p className="title">来玩</p>
                    </div>
                    <div className="row_center">
                        <a href="/"><p className="subtitle">首页</p></a>
                        <a href="/"><p className="subtitle">德州术语表</p></a>
                    </div>
                </div>
                <div className="content">
                    <div className="phone_content">
                        <BackgroundImage
                            placeholder={smallPhone}
                            src={bigPhone}
                            className="phone"
                        />
                    </div>
                </div>
            </div>
            // 暂时还是不把这放在背景里了.还是直接在body里面放...这个用来加载轮播图吧.不然文档流不知道如何设置
        );
    }
}
