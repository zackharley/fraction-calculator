import React from 'react';
import FractionField from './FractionField.jsx';
import FractionSeparator from './FractionSeparator.jsx';

const Fraction = React.createClass({
	
	render() {
		return (
			<section className='fraction'>
				<FractionField
					autofocus={this.props.firstFraction}
					number={this.props.firstFraction ? 1 : 3}
					changeOperator={this.props.changeOperator}
				/>
				<FractionSeparator />
				<FractionField
					autofocus={false}
					number={this.props.firstFraction ? 2 : 4}
					changeOperator={this.props.changeOperator}
				/>
			</section>
		);
	}

});

export default Fraction;