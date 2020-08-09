import React, { useState, useEffect } from 'react';
import FilterMenu from './components/FilterMenu.jsx';
import Habit from './components/Habit.jsx';
import Memo from './components/Memo.jsx';
import Input from './components/Input.jsx';
import './App.css';

export default function App() {
	const [memos, setMemos] = useState(JSON.parse(localStorage.getItem('memos') || []));
	const [menus, setMenus] = useState(['Work', 'Life', 'Hobby', 'Wish', 'Health', 'Habit']);
	const [habits, setHabits] = useState(
		JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit')
	);
	const [filterMenu, setFilterMenu] = useState('all');

	// ! * componentDidMount
	useEffect(() => {
		// setMemos(JSON.parse(localStorage.getItem('memos')));
		// setHabits(memos.filter((memo) => memo.menu === 'habit'));
	}, []);

	// ! * Habit - habit 추가/삭제되었을 떄 Update
	useEffect(() => {
		setHabits(JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit'));
	}, [habits.length]);

	// ! * Memo
	// * memos.length 바뀌면 달리 보여줘야됨
	// * 메모 추가되었을 경우
	useEffect(() => {}, [memos.length]);

	// * deleteMemo
	const deleteMemo = (deleteID) => {
		const newMemos = memos.filter((memo) => memo.id !== deleteID);
		localStorage.setItem('memos', JSON.stringify(newMemos));
		setMemos(newMemos);
		// setTodos(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
	};

	// * editMemo
	const editMemo = (memo, menu) => {
		const text = memo.innerText;
		const id = memo.id;

		deleteMemo(id);
		setText(text);
		setMenu(menu);
		console.log(`${menu}     ${text}\t${id}`);
		// handleInputMenu(menu);
		// * radio checked 바꿔야함
	};

	// ! Input
	const [menu, setMenu] = useState('work');
	const [text, setText] = useState('');

	const createUUID = () => {
		return '_' + Math.random().toString(36).substr(2, 9);
	};

	useEffect(() => {
		// * input form 에서도 변경되는 모습
	}, [text]);

	const handleInputMenu = (menuVal) => {
		if (menuVal !== undefined) {
			setMenu(menuVal);
		}
	};

	const changeInputText = (changeText) => {
		setText(changeText);
	};

	useEffect(() => {}, [menu]);

	const handleSubmit = () => {
		if (text !== '') {
			const id = createUUID();
			const db = JSON.parse(localStorage.getItem('memos'));
			localStorage.setItem('memos', JSON.stringify([...db, { menu, text, id }]));
			setText('');
			setMemos([...memos, { menu, text, id }]);
			setMenu(menu);
			setFilterMenu(filterMenu);
		}
	};

	useEffect(() => {
		console.log(`filterMenu: ${filterMenu}`);
	}, [filterMenu]);

	const handleFilterMenu = (selectedMenu) => {
		setFilterMenu(selectedMenu);
	};

	return (
		<div className="App">
			<div className="page">
				<Habit habits={habits} />
				<FilterMenu handleFilterMenu={handleFilterMenu} />
				<Memo filter={filterMenu} memos={memos} deleteMemo={deleteMemo} editMemo={editMemo} />
				<Input
					text={text}
					menu={menu}
					handleSubmit={handleSubmit}
					handleInputMenu={handleInputMenu}
					changeInputText={changeInputText}
				/>
			</div>
		</div>
	);
}
