import React, { useState, useEffect } from 'react';
import { useCircularList } from './../hooks/useCircularList';
import { useInterval } from './../hooks/useInterval';

export default function Habit({ habits }) {
	const [habit, before, next] = useCircularList(habits);

	useInterval(next, 5000);

	return (
		<header className="habit">
			<div className="habit__div">
				<span className="habbit__text">{habit?.text || '이곳에 습관 텍스트가 나옵니다.'}</span>
			</div>
			<div className="habit__btn__container">
				<button className="habit__prev__btn" onClick={before}>
					<i className="fa fa-chevron-left" aria-hidden="true"></i>
				</button>
				<button className="habit__next__btn" onClick={next}>
					<i className="fa fa-chevron-right" aria-hidden="true"></i>
				</button>
			</div>
		</header>
	);
}
