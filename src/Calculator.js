import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput.js'


///////// Conversion Functions //////////////

function toCelsiusFromF(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function toCelsiusFromK(kelvin) {
	return kelvin - 273;
}

function toFahrenheitFromC(celsius) {
  return (celsius * 9 / 5) + 32;
}

function toFahrenheitFromK(kelvin) {
  return (kelvin * 9/5) - 459.67;
}

function toKelvinFromF(fahrenheit) {
  return ((fahrenheit ) * 5 / 9) + 273;
}

function toKelvinFromC(celsius) {
  return celsius + 273;
}






function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}



//////////// Calculator /////////////////

class Calculator extends Component {

	constructor(props) {
		super(props);
		this.state = {temperature: " ", scale: "c"}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.handleKelvinChange = this.handleKelvinChange.bind(this);

		
	}

	handleCelsiusChange(temperature){
		this.setState({scale: "c", temperature})
	}

	handleFahrenheitChange(temperature){
		this.setState({scale: "f", temperature})
	}	

	handleKelvinChange(temperature){
		this.setState({scale: "k", temperature})
	}



	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		var celsius = ""
		var fahrenheit = ""
		var kelvin = ""
		if (scale === "f") {
			celsius = tryConvert(temperature, toCelsiusFromF)
			kelvin = tryConvert(temperature, toKelvinFromF)
			fahrenheit = temperature
		} else if (scale === "c"){
			fahrenheit = tryConvert(temperature, toFahrenheitFromC)
			kelvin = tryConvert(temperature, toKelvinFromC)
			celsius = temperature
		} else if (scale === "k"){
			celsius = tryConvert(temperature, toCelsiusFromK)
			fahrenheit = tryConvert(temperature, toFahrenheitFromK)
			kelvin = temperature
		}


		// const celsius = scale === "f" ? scale === "k" ? tryConvert(temperature, toCelsiusFromF) : tryConvert(temperature, toCelsiusFromK): temperature;
		// const fahrenheit = scale === "c" ? scale === "k" ? tryConvert(temperature, toFahrenheitFromC) : tryConvert(temperature, toFahrenheitFromK): temperature;
		// const kelvin = scale === "c" ? scale === "f" ? tryConvert(temperature, toKelvinFromC) : tryConvert(temperature, toKelvinFromF): temperature;
		return(
			<div className = "container">
				<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
				<TemperatureInput scale="k" temperature={kelvin} onTemperatureChange={this.handleKelvinChange} />
			</div>
		)
	}
}



export default Calculator;