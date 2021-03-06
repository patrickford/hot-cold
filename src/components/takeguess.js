import React from 'react';
import "./takeguess.css"

//Guess Input

export default class TakeGuess extends React.Component {
	handleSubmit(e){
		e.preventDefault();
		let currentGuess = this.input.value;
		this.props.onGuess(currentGuess);
		document.forms['GuessForm'].reset()
	}

	render() {
		return (
			<div className="TakeGuess">
				<form name="GuessForm" onSubmit={e => this.handleSubmit(e)}>
					<input type="number" placeholder="enter a guess" 
						ref={input => this.input = input}>
					</input>
					<button type="submit">Guess</button>
				</form>
			</div>	 

		)
	}
}	