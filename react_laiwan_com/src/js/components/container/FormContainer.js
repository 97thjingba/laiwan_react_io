import React, { Component } from 'react';
import Input from '../presentational/Input';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
        console.log('你大爷的');
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
export default FormContainer;
