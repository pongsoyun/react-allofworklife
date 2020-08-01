import React from 'react';
import Habit from '../components/Habit.jsx';
import Memo from '../components/Memo.jsx';
import Input from '../components/Input.jsx';
import FilterMenu from '../components/FilterMenu.jsx';

export default function Home() {
	return (
		<div className="App">
			<Habit />
			<FilterMenu />
			<Memo />
			<Input />
		</div>
	);
}
