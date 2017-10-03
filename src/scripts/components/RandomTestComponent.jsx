import React, { Component } from 'react';

export default class RandomTestComponent extends Component {

	render() {
		return(
			<div className="marvWrap centerChildren">
				<div className="marvWrap--off centerChildren">
					<img src="img/marv3_off-m.png" alt="MarvOff"/>
				</div>
				<div className="marvWrap--on centerChildren animFlickerIn">
					<img src="img/marv3_on-m.png" alt="MarvOn"/>
				</div>
			</div>
		);
	}
}