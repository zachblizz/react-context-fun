import React, { Component } from 'react';
import MyContext from '../../contexts/MyContext';
import ContextPresentation from '../presentation/ContextPresentation';

export default class ContextTester extends Component { 
    constructor(props) {
        super(props);

        // implementation of changeName
        this.changeName = e => {
            this.setState({
                name: e.target.value
            })
        }

        this.state = {
            name: "jimmyfargo",
            changeName: this.changeName
        }
    }
        
    render() {
        return (
            <MyContext.Provider value={ this.state }>
                <ContextPresentation />
            </MyContext.Provider>
        );
    }
}