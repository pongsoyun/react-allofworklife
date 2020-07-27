import React, { Component } from 'react';
import './App.css';
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
				{/* {memos.map((memo) => (
          <Memo id={memo.id} text={memo.text} menu={memo.menu} />
        ))} */}
				{/* {todos.map(renderTodo)} */}
				<Input />
			</div>
		);
	}
}
