import React, { Component } from 'react';
import './App.css';
import {Lazy} from './Lazy.js';

class App extends Component {

    constructor(props, context) {
        super(props, context);

        const computation = new Lazy();
        /* computation.add(function plus(a, b) { return a + b; }, 1)*/
        console.log("results:" + computation.add(function plus(a) { return a + 1; })
                   .add(function minus(a) { return a - 4; })
                   .evaluate([1, 2, 3]));

    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}
export default App;
