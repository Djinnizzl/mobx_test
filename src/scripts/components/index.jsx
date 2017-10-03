import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Link } from 'react-router-dom';

/* STORES */
import MainStore from '../stores/index.jsx';

/* HELPER */
import Loader from './helper/Loader.jsx'

/* COMPONENTS */
import ListTest from './ListTestComponent.jsx';
import Random from './RandomTestComponent.jsx';

@observer
class Main extends Component {

	MainStore = new MainStore();

	render() {

		const MainStore = this.MainStore;

		return (
			<Provider MainStore={MainStore}>
				<div>
					<DevTools />
					{/*<Loader loadingFinishedWhen={false} />*/}
					<ListTest />
					<ListTest />
					<Link to="/sdad">Test</Link>
					<Random/>
				</div>
			</Provider>
		);
	}
}

export default Main;