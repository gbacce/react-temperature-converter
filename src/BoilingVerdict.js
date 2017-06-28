import React, { Component } from 'react'




function BoilingVerdict(props){
	if((props.scale == 'c') && (props.temperature >= 100)) {
		return(<p>The water would, in theory, "boil."</p>)
	}
	if((props.scale == 'f') && (props.temperature >= 212)) {
		return(<p>The water would, in theory, "boil."</p>)
	}
	if((props.scale == 'k') && (props.temperature >= 373)) {
		return(<p>The water would, in theory, "boil."</p>)
	}
	else return(<p>The water would not, in theory, "boil."</p>)
}



export default BoilingVerdict;


