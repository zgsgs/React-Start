import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class InsertCSS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "我正在设置属性props",
            strikes: 0,
        };

        this.timerTick = this.timerTick.bind(this),

    }

    timerTick(event) {
        this.setState({
             strikes: this.state.strikes + 0.001
        });
    },

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    },

    render() {
        var counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        };
        var count = this.state.strikes.toLocaleString();
        return (
            <h1 style={counterStyle}>{count}</h1>
        );

    },
};

class TimeTick extends React.Components {
            render() {
                var commonStyle = {
                    margin: 0,
                    padding: 0
                };

                var divStyle = {
                    width: 250,
                    textAlign: "center",
                    backgroundColor: "#020202",
                    padding: 40,
                    fontFamily: "sans-serif",
                    color: "#999999",
                    borderRadius: 10
                };

                var textStyles = {
                    emphasis: {
                        fontSize: 38,
                        ...commonStyle
                    },
                    smallEmphasis: {
                        ...commonStyle
                    },
                    small: {
                        fontSize: 17,
                        opacity: 0.5,
                        ...commonStyle
                    }
                };

                return(
                    <div style={divStyle}>
                        <InsertCSS />
                        <h2 style={textStyles.smallEmphasis}>LIGHTNING STRONG </h2>
                        <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                        <p style={textStyles.small}>(since you loaded this example)</p>
                    </div>
                );
            }
        });

var app = document.getElementById('app');
ReactDOM.render(
    <TimeTick />,
    app
);

export default TimeTick;
