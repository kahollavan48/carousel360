import React, {Component} from 'react';
import Carousel from "../carousel";
import {UI_App} from "./ui_app";

class App extends Component {
    render() {
        return (
            <UI_App>
                <Carousel/>
            </UI_App>
        );
    };
};

export default App;
