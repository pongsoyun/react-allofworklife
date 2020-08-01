import React, { useState, useEffect } from 'react';

export default function FilterMenu() {
	const [menu, setMenu] = useState('nav__work');
	function handleClick(selectedMenu) {
		setMenu(selectedMenu);
	}

	useEffect(() => {
		// * 현재 선택된 menu 확인
		// console.log(menu);
	}, [menu]);

	return (
		<nav className="menus-container">
			<ul className="menus" onClick={(e) => handleClick(e.target.className)}>
				<li className="nav__all">All</li>
				<li className="nav__work">Work</li>
				<li className="nav__life" value="life">
					Life
				</li>
				<li className="nav__hobby">Hobby</li>
				<li className="nav__wish">Wish</li>
				<li className="nav__health">Health</li>
				<li className="nav__habit">Habit</li>
			</ul>
		</nav>
	);
}
