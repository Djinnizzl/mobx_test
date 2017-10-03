import { observable, action } from 'mobx';
import uuid from 'uuid/v1';

import { List } from '../models/List.jsx';

export default class ListsStore {

	constructor() {
		this.Lists = {};
	}

	@action newListInstance(initialState = {}) {
		const id = uuid();

		this.Lists[id] = new List(this, initialState);
		this.Lists[id].id = id;
		return this.Lists[id];
	}

	@action destroyList(id) {
		delete this.Lists[id];
	}
}