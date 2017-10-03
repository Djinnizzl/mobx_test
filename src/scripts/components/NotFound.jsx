import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="notFound">
				<div className="animFloatInUp">
					<div className="animFloat strongShout strongShout--huge">
						404! Page not found.
					</div>
					<Link to='/'>Back</Link>
				</div>
			</div>
		);
	}
}



export default NotFound;