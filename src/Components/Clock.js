
import React, { Component } from 'react';
import getClockTime from "./ClockLibrary";

class Clock extends Component {
    constructor() {
        super();
        this.state = getClockTime();
    }

    componentDidMount() {
        console.log("Starting clock");
        const oneSecond = 1000;
        this.ticking = setInterval(() => this.setState(getClockTime()), oneSecond);
    }

    componentWillMount() {
        clearInterval(this.ticking);
        console.log("Stopping clock");
    }

    render() {
        const { hours, minutes, seconds, timeOfDay} = this.state;

        return(
            <div>
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>

                <button onClick={this.props.onClose}>x</button>
            </div>
        );
    }
}

export default Clock;
