import React, { useState, useEffect } from 'react';
import FilterMenu from './components/FilterMenu.jsx';
import Habit from './components/Habit.jsx';
import Memo from './components/Memo.jsx';
import Input from './components/Input.jsx';

export default function App() {
	const [memos, setMemos] = useState(JSON.parse(localStorage.getItem('memos')));
	const [menus, setMenus] = useState(['Work', 'Life', 'Hobby', 'Wish', 'Health', 'Habit']);
	const [habits, setHabits] = useState(
		JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit')
	);

	// * Habit - habit 추가/삭제되었을 떄 Update
	useEffect(() => {
		setHabits(JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit'));
	}, [habits.length]);

	// * componentDidMount
	useEffect(() => {
		// setMemos(JSON.parse(localStorage.getItem('memos')));
		// setHabits(memos.filter((memo) => memo.menu === 'habit'));
	}, []);

	return (
		<div className="App">
			<Habit habits={habits} />
			<FilterMenu />
			<Memo />
			<Input />
		</div>
	);
}
