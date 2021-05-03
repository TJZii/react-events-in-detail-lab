// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    delayHere = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <div>
                <button id='delayer' onclick={this.delayHere}>Delay</button>
            </div>
        )
    }
}
