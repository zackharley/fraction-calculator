import React from 'react';

const Equals = React.createClass({

	render() {
		return (
			<section className='operator-wrapper'>
				<span onClick={this.props.updateFraction} className='equals'>=</span>
			</section>
		);
	}

});

export default Equals;