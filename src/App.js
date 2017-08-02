import React, { Component } from 'react';
import './App.css';
import {Lazy} from './Lazy.js';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        const computation = new Lazy();
        console.log("result:"+ computation.add(function plusA(a, b) { return a + b; }, 1)
                   .add(function plus(a) { return a + 1; })
        .evaluate([1, 2]));
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}
export default App;
