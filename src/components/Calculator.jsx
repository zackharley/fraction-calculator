import React from 'react';
import Fraction from './Fraction.jsx';
import OperatorField from './OperatorField.jsx';
import Equals from './Equals.jsx';
import FractionOutput from './FractionOutput.jsx';
import fraction from './../utilities/Fraction';
import {addFractions, subtractFractions, multiplyFractions, divideFractions} from './../utilities/Fraction';

const Calculator = React.createClass({

	componentDidMount() {
		alert(
			'Welcome to the Fraction Calculator!\n' + 
			'To use this calculator use the keyboard and/or the mouse to enter\n' + 
			'integers to the fraction numerators and denominators. You can use `enter`\n' + 
			'or click the equals symbol to update the output!'
		);
	},

	getInitialState() {
		return {
			operator: 43,
			otherOperators: [
				45,
				215,
				247
			],
			fraction: {
				numerator: 0,
				denominator: 1
			}
		};
	},

	changeOperator(newCharCode) {
		if(newCharCode !== this.state.operator) {
			this.setState({
				operator: newCharCode,
				otherOperators: this.state.otherOperators.map(operator => {
					if(operator === newCharCode) {
						return this.state.operator;
					} else {
						return operator;
					}
				})
			});
		}
	},

	handleKeyPress(event) {
		if(event.keyCode === 13) {
			this.updateFraction();
		}
	},

	updateFraction() {
		let numerator1 = parseInt(document.getElementById('fraction-field-1').value);
		let denominator1 = parseInt(document.getElementById('fraction-field-2').value);
		let numerator2 = parseInt(document.getElementById('fraction-field-3').value);
		let denominator2 = parseInt(document.getElementById('fraction-field-4').value);

		if(numerator1 && denominator1 && numerator2 && denominator2) {
			if(denominator1 !== 0 && denominator2 !== 0) {
				if(denominator1 < 0) {
					numerator1 *= -1;
					denominator1 *= -1;
				}
				if(denominator2 < 0) {
					numerator2 *= -1;
					denominator2 *= -1;
				}

				const f1 = fraction(numerator1, denominator1);
				const f2 = fraction(numerator2, denominator2);
				let newFraction = {};
				if(this.state.operator === 43) {
					newFraction = addFractions(f1, f2);
				} else if(this.state.operator === 45) {
					newFraction = subtractFractions(f1, f2);
				} else if(this.state.operator === 215) {
					newFraction = multiplyFractions(f1, f2);
				} else if(this.state.operator === 247) {
					newFraction = divideFractions(f1, f2);
				}

				this.setState({
					fraction: newFraction
				});
			} else {
				alert('Invalid denominator! The denominator must not be 0.');
			}
		} else {
			alert('You must enter valid integers to make a calculation!');
		}
	},
	
	render() {
		return (
			<section className='fraction-content' onKeyDown={this.handleKeyPress} >
				<Fraction
					firstFraction={true}
					changeOperator={this.changeOperator}
				/>
				<OperatorField
					operator={this.state.operator}
					otherOperators={this.state.otherOperators}
					changeOperator={this.changeOperator}
				/>
				<Fraction
					firstFraction={false}
					changeOperator={this.changeOperator}
				/>
				<Equals updateFraction={this.updateFraction} />
				<FractionOutput
					top={this.state.fraction.numerator}
					bottom={this.state.fraction.denominator} 
				/>
			</section>
		);
	}

});

export default Calculator;