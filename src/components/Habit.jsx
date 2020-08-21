import React, { useState, useEffect } from 'react';
import { useCircularList } from './../hooks/useCircularList';

export default function Habit({ habits }) {
	const [habit, before, next] = useCircularList(habits);

	useEffect(() => {
		// * react Hooks에서 setInterval처럼 기능하게끔 하기
		const timer = setTimeout(() => {
			next();
		}, 5000);
		return () => clearTimeout(timer);
	}, [habit]);

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
