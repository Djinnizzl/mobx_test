import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class InOutAnimation extends Component {

	render() {
		return (
			<ReactCSSTransitionGroup
				transitionName={this.props.animation}
				transitionEnterTimeout={this.props.enterDuration}
				transitionLeaveTimeout={this.props.leaveDuration}>
				{this.props.children}
			</ReactCSSTransitionGroup>
		); 
	}
}

InOutAnimation.defaultProps = {
  enterDuration: 500,
  leaveDuration: 300,
  animation: 'tgLeftActiveLeft'
};