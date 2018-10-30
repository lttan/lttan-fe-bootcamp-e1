/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Information from './Information';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Information />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));