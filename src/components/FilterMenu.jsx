import React from 'react';
import { WORK_MENU, LIFE_MENU, HOBBY_MENU, WISH_MENU, HEALTH_MENU, HABIT_MENU, ALL_MENU } from '../constants/menus';
import { upperCaseAtFirst } from '../utils/string';

export default function FilterMenu({ handleFilterMenu }) {
	const MENUS = [ALL_MENU, WORK_MENU, LIFE_MENU, HOBBY_MENU, WISH_MENU, HEALTH_MENU, HABIT_MENU];

	return (
		<nav className="menus-container">
			<ul className="menus" onClick={(e) => handleFilterMenu(e.target.className)}>
				{MENUS.map((menu, i) => (
					<li className={menu} key={i}>
						{upperCaseAtFirst(menu)}
					</li>
				))}
			</ul>
		</nav>
	);
}
