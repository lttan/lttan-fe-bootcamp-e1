/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/information.css';

export default class Information extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0795</td>
                        <td>An Tran Truong Le</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}