import React, { Component } from 'react';
import FilterMenu from './components/FilterMenu.jsx';
import Habit from './components/Habit.jsx';
import Memo from './components/Memo.jsx';
import Input from './components/Input.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Habit />
				<FilterMenu />
				<Memo />
				<Input />
			</div>
		);
	}
}
