import { observable, computed, action, extendObservable } from 'mobx';

export class List {

	@observable list = [];

	constructor(store, initialState) {
		this.store = store;
		extendObservable(this, initialState);
	}

	@computed get hasItems() {
		return this.list.length > 0
	}

	@action add(item) {
		this.list.push(item);
	}

	@action remove() {
		return this.list.pop();
	}
}
