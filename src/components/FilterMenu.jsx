import React, { useState, useEffect } from 'react';

export default function FilterMenu() {
	function handleClick(menu) {
		// className
		// TODO Memo.jsx씨 현재 menu 클릭된거 필터링 해주세요
		console.log(menu);
	}

	return (
		<nav className="menus-container">
			<ul className="menus" onClick={(e) => handleClick(e.target.className)}>
				<li className="nav__all">All</li>
				<li className="nav__work">Work</li>
				<li className="nav__life">Life</li>
				<li className="nav__hobby">Hobby</li>
				<li className="nav__wish">Wish</li>
				<li className="nav__health">Health</li>
				<li className="nav__habit">Habit</li>
			</ul>
		</nav>
	);
}
