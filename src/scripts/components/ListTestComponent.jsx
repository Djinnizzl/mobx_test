import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

import InOutAnimation from './helper/InOutAnimation.jsx';

@inject('MainStore') @observer
export default class ListTestComponent extends Component {

	constructor(props) {
		super(props); 
		this.liste = this.props.MainStore.ListsStore.newListInstance()

		this._handleAdd = this._handleAdd.bind(this);
		this._handleRemove = this._handleRemove.bind(this);
	}

	_handleAdd() {
		this.liste.add('peng');
	}

	_handleRemove() {
		this.liste.remove();
	}

	render() {

		const items = this.liste.hasItems ? this.liste.list.map((item, i) => <div>{item}</div>) : <div>nuescht drin</div>

		return (
			<div>
				<button onClick={this._handleAdd}>add</button>
				<button onClick={this._handleRemove}>rem</button>
				<InOutAnimation>
					{items}
				</InOutAnimation>
			</div>
		);
	}
}