import React from 'react';
import FractionSeparator from './FractionSeparator.jsx';

const FractionOutput = React.createClass({

	render() {
		return(
			<section className='fraction'>
				<span className='fraction-output-field'>{this.props.top}</span>
				<FractionSeparator />
				<span className='fraction-output-field'>{this.props.bottom}</span>
			</section>
		);
	}

});

export default FractionOutput;