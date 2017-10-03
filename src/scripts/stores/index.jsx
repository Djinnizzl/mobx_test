import { observable } from 'mobx';

// import { Model } from '../models/Model.jsx';

import ListsStore from './ListsStore.jsx';

export default class MainStore {

	constructor() {
		// this.Model = new Model(this, {/* initial values */})
		this.ListsStore = new ListsStore();
	}
}