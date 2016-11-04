import React from 'react';

const FractionField = React.createClass({

	getInitialState() {
		return {
			value: ''
		}
	},

	handleChange(event) {
		let newCharCode = event.target.value.charCodeAt(event.target.value.length - 1);
		const nextId = parseInt(event.target.id.charAt(event.target.id.length - 1)) + 1;
		if(
			(newCharCode >= 48 && newCharCode <= 57) ||
			event.target.value.length === 0 ||
			(event.target.value.length === 1 && newCharCode === 45)
		) {
			if(event.target.value.length <= 4) {
				this.setState({
					value: event.target.value
				});
			}
		}
		if(newCharCode === 47 && (nextId === 2 || nextId === 4)) {
			document.getElementById(`fraction-field-${nextId}`).focus();
		}
		if((nextId === 3 || nextId === 5) && isOperator(newCharCode)) {
			if(newCharCode === 42) {
				newCharCode = 215;
			}
			if(newCharCode === 47) {
				newCharCode = 247;
			}
			this.props.changeOperator(newCharCode);
			if(nextId === 3) {
				document.getElementById(`fraction-field-${nextId}`).focus();
			}
		}
	},

	render() {
		return (
			<input
				id={`fraction-field-${this.props.number}`}
				value={this.state.value}
				onChange={this.handleChange}
				type='text'
				autoFocus={this.props.autofocus}
				className='fraction-field'
			/>
		);
	}

});

function isOperator(charCode) {
	const add = 43;
	const subtract = 45;
	const multiply = 42;
	const divide = 47;

	return (
		charCode === add ||
		charCode === subtract ||
		charCode === multiply || 
		charCode === divide
	);
}

export default FractionField;