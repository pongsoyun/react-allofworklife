import React, { useState, useEffect } from 'react';

export default function Habit({ habits }) {
	const [habit, setHabit] = useState(habits.length === 0 ? '이곳에 습관 텍스트가 나옵니다.' : habits[0].text);
	const [habitIndex, setHabitIndex] = useState(0);

	useEffect(() => {
		console.log(habits);

		if (habitIndex < 0) setHabitIndex(habits.length - 1);
		window.setTimeout(() => plusHabitIndex, 1000);

		if (habits.length !== 0) setHabit(habits[habitIndex].text);

		// * react Hooks에서 setInterval처럼 기능하게끔 하기
		const timer = setTimeout(() => {
			plusHabitIndex();
		}, 5000);
		return () => clearTimeout(timer);
	}, [habitIndex]);

	function minusHabitIndex() {
		habitIndex === 0 ? setHabitIndex(habits.length - 1) : setHabitIndex(habitIndex - 1);
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
