import React from 'react';
import { useCircularList } from './../hooks/useCircularList';
import { useInterval } from './../hooks/useInterval';

const ArrowButton = ({ direction, clickHandler }) => (
	<button className={`habit__${direction}__btn`} onClick={clickHandler}>
		<i className={`fa fa-chevron-${direction}`} aria-hidden="true"></i>
	</button>
);
export default function Habit({ habits }) {
	const [habit, before, next] = useCircularList(habits);
	useInterval(next, 5000);

	return (
		<header className="habit">
			<div className="habit__div">
				<span className="habbit__text">{habit?.text || '이곳에 습관 텍스트가 나옵니다.'}</span>
			</div>

			<div className="habit__btn__container">
				<ArrowButton direction="left" clickHandler={before} />
				<ArrowButton direction="right" clickHandler={next} />
			</div>
		</header>
	);
}
