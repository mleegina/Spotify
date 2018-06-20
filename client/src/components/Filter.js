import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div style={{display:'block', width: '20%'}}>
                <input type="text" onKeyUp={event => 
                    this.props.onTextChange(event.target.value)} />
            </div>
        );
    }
}