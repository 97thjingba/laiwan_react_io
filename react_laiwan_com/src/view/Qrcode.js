import React, { Component } from 'react';
import QRCode from 'qrcode.react';

// const icon = require('./source/icon.png');

export default class Qrcode extends Component {
    render() {
        return (
            <QRCode
                value="https://laiwan.io/download/qrcode"
                size={156}
                renderAs="svg"
                imageSettings={{
                    src: 'https://lh3.googleusercontent.com/xeZTBZc-XUKchwKaRu7Px1pjmSduodtsYBJvzM2h2Jl9xj8bo2ohsPPEqZ3YeuXdFqE=s100',
                    excavate: true,
                    height: 24,
                    width: 24,
                }}
            />
        );
    }
}
