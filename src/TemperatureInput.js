import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict.js'

class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		var temperature = this.props.temperature;
		var scale = this.props.scale;
		return(
			<div className="tempInputContainer">
				<input value={temperature} onChange={this.handleChange}/>
				<BoilingVerdict scale={scale} temperature={temperature} />
			</div>
		)
	}
}



export default TemperatureInput;