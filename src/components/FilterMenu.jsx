import React, { useState, useEffect } from 'react';

export default function FilterMenu({ handleFilterMenu }) {
	// const [menu, setMenu] = useState('nav__work');
	// function handleClick(selectedMenu) {
	// 	setMenu(selectedMenu);
	// }

	// useEffect(() => {
	// 	// * 현재 선택된 menu 확인
	// 	// console.log(menu);
	// }, [menu]);

	return (
		// MENUS.map(menu => <li className={menu}>{toPascal(menu)}</li>)
		<nav className="menus-container">
			<ul className="menus" onClick={(e) => handleFilterMenu(e.target.className)}>
				<li className="all">All</li>
				<li className="work">Work</li>
				<li className="life">Life</li>
				<li className="hobby">Hobby</li>
				<li className="wish">Wish</li>
				<li className="health">Health</li>
				<li className="habit">Habit</li>
			</ul>
		</nav>
	);
}
