
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getClockTime } from "./TimeLibrary";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = getClockTime();
    }

    static propTypes = {
        onClose: PropTypes.func
    }

    componentDidMount() {
        console.log("Starting clock");

        const oneSecond = 1000;
        const onTick = () => {
            this.setState(getClockTime());
            console.log('Tick');
        };

        this.ticking = setInterval(onTick, oneSecond);
    }

    componentWillUnmount() {
        console.log("Stopping clock");
        clearInterval(this.ticking);
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;
        const displayTime = `${hours}:${minutes}:${seconds} ${ampm}`;
        const divStyle = {
            margin: 20,
            fontSize: 24
        };

        return (
            <div>
                <span style={divStyle}>{displayTime}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        );
    }
}

export default Clock;
