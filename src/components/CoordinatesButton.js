// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    currentCoords = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <div>
                <button id='coordinatesPresser' onClick={this.currentCoords}>Coordinates</button>
            </div>
        )
    }
}
