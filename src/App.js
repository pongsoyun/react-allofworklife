import React, { useState, useEffect, useCallback } from 'react';
import FilterMenu from './components/FilterMenu.jsx';
import Habit from './components/Habit.jsx';
import Memo from './components/Memo.jsx';
import Input from './components/Input.jsx';
import { useLocalStorage } from './hooks/useLocalStorage';
import { createUUID } from './utils/createUUID';
import { MEMOS_KEY, WORK_MENU, HABIT_MENU, ALL_MENU } from './constants/menus';
import './App.css';
export default function App() {
	const [memos, setMemos] = useLocalStorage({
		key: MEMOS_KEY,
		defaultState: [],
	});
	const getHabits = useCallback(() => memos.filter(({ menu }) => menu === HABIT_MENU), [memos]);

	const [filterMenu, setFilterMenu] = useState(ALL_MENU);

	// * deleteMemo
	const deleteMemo = (deleteID) => {
		setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== deleteID));
	};

	// * editMemo
	const editMemo = (selectedMemo, selectedMenu) => {
		deleteMemo(selectedMemo.id);
		setText(selectedMemo.innerText);
		setCurrentMenu(selectedMenu);
		// handleInputMenu(menu);
	};

	// * Input
	const [currentMenu, setCurrentMenu] = useState(WORK_MENU);
	const [text, setText] = useState('');

	const handleInputMenu = (inputMenu) => {
		if (inputMenu) {
			setCurrentMenu(inputMenu);
		}
	};

	const changeInputText = (inputText) => {
		setText(inputText);
	};

	const handleSubmit = () => {
		if (text !== '') {
			const id = createUUID();
			setMemos((prevMemos) => [...prevMemos, { menu: currentMenu, text, id }]);
			setText('');
		}
	};

	const handleFilterMenu = (selectedMenu) => {
		setFilterMenu(selectedMenu);
	};

	return (
		<div className="App">
			<div className="page">
				<Habit habits={getHabits()} />
				<FilterMenu handleFilterMenu={handleFilterMenu} />
				<Memo filter={filterMenu} memos={memos} deleteMemo={deleteMemo} editMemo={editMemo} />
				<Input
					text={text}
					menu={currentMenu}
					handleSubmit={handleSubmit}
					handleInputMenu={handleInputMenu}
					changeInputText={changeInputText}
				/>
			</div>
		</div>
	);
}
