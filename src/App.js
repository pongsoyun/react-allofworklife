import React, { Component } from 'react';
import Habit from './components/Habit.jsx';
import Navigation from './components/Navigation.jsx';
import Memo from './components/Memo.jsx';
import Input from './components/Input.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Habit />
				<Navigation />
				<Memo />
				<Input />
			</div>
		);
	}
}
