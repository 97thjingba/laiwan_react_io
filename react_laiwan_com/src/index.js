import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const home = document.getElementById('laiwan');

ReactDOM.render(<App />, home);
registerServiceWorker(); // 注册一个离线的缓存
