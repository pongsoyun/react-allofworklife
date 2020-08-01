import React, { useState, useEffect } from 'react';

export default function Habit() {
	let habits = JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit');

	const [habit, setHabit] = useState(habits[0].text || '이곳에 습관 텍스트가 나옵니다.');
	const [habitIndex, setHabitIndex] = useState(0);

	useEffect(() => {
		// * 5s마다 habit index++ /// habits[index % habits.length]
		if (habitIndex < 0) setHabitIndex(0);

		console.log(`habitIndex: ${habitIndex}`);
	}, [habitIndex]);

	// * habit 추가/삭제되었을 떄 Update
	useEffect(() => {
		habits = JSON.parse(localStorage.getItem('memos')).filter((memo) => memo.menu === 'habit');
	}, [habits.length]);

	// * just every 5seconds
	// setInterval(() => {
	// 	plusHabitIndex();
	// 	// setHabit(habits[habitIndex]);
	// }, 5000);

	function minusHabitIndex() {
		habitIndex === 0 ? setHabitIndex(0) : setHabitIndex(habitIndex - 1);
	}

	function plusHabitIndex() {
		setHabitIndex((habitIndex + 1) % habits.length);
	}

	return (
		<header className="habit">
			<div className="habit__div">
				<span className="habbit__text">{habit}</span>
			</div>
			<div className="habit__btn__container">
				<button className="habit__prev__btn" onClick={minusHabitIndex}>
					<i className="fa fa-chevron-left" aria-hidden="true"></i>
				</button>
				<button className="habit__next__btn" onClick={plusHabitIndex}>
					<i className="fa fa-chevron-right" aria-hidden="true"></i>
				</button>
			</div>
		</header>
	);
}
