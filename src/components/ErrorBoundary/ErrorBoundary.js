import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage : ''
    }

    constructor(props) {
        super(props);
    }

    componentDidCatch(error, info) {
        if(error) {
            this.setState({
                hasError: true,
                errorMessage: error
            });
        }
    }

    render() {
        if(this.state.hasError) {
            return <h1>Some Error</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;