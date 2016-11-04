import React from 'react';

const OperatorField = React.createClass({

	handleClick(event) {
		let operatorToSwitch = -1;

		switch(parseInt(event.target.id.charAt(event.target.id.length - 1))) {
			case 1:
				operatorToSwitch = 0;
				break;
			case 2:
				operatorToSwitch = 1;
				break;
			case 3:
				operatorToSwitch = 2;
				break;
		}

		let tempOperator = this.props.otherOperators[operatorToSwitch];

		this.props.changeOperator(tempOperator);
	},

	render() {
		return (
			<section className='operator-wrapper'>
				<span
					className={this.props.operator === 45 ? 'current-operator minus' : 'current-operator'}
				>
					{String.fromCharCode(this.props.operator)}
				</span>
				<section className='other-operators-wrapper'>
					<a
						id='other-operator-1'
						className='other-operator'
						onClick={this.handleClick}
					>
						{String.fromCharCode(this.props.otherOperators[0])}
					</a>
					<a
						id='other-operator-2'
						className='other-operator'
						onClick={this.handleClick}
					>
						{String.fromCharCode(this.props.otherOperators[1])}
					</a>
					<a
						id='other-operator-3'
						className='other-operator'
						onClick={this.handleClick}
					>
						{String.fromCharCode(this.props.otherOperators[2])}
					</a>
				</section>
			</section>
		);
	}

});

export default OperatorField;