import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import autoBind from "react-autobind";//this自动绑定包

import * as indexall from "./index"


class InputControlES6 extends React.Component {
    constructor(props) {
        super(props);

        //set initial state
        this.state = {
            text: props.initialValue || 'placeholder',
            app: '美好',
            color: 'red',
        };

        //ES6类中函数必须手动绑定
       // this.handleChange = this.handleChange.bind(this);
       //通过react-autobind包 可以实现this的自动绑定
       autoBind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value

        });
    }

    render() {
        var containerStyle = {
            padding: 50,
            backgroundColor: "#FF0",

        };
        
        return (
            <div style={containerStyle}>
                Type something:
                <p>这么用对吗？</p>
                <input onChange={this.handleChange} value={this.state.app} />
            </div>
        );
    }
}

var app = document.getElementById('app');

ReactDOM.render(
    <div>
        我来自Entry.jsx
        <InputControlES6 />
        <Card />
    </div>,
    app
)

InputControlES6.propTypes = {
    initialValue: PropTypes.string
};
InputControlES6.defaultProps = {
    initialValue: ''
}