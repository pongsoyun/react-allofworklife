import React from 'react';
import { WORK_MENU, LIFE_MENU, HOBBY_MENU, WISH_MENU, HEALTH_MENU, HABIT_MENU } from '../constants/menus';

const RadioMenu = ({ menu, currentMenu }) => (
	<div>
		<input type="radio" name="menu" id={menu} value={menu} checked={menu === currentMenu} />
		<label for={menu}>{menu}</label>
	</div>
);

export default function Input({ text, currentMenu, handleInputMenu, handleSubmit, changeInputText }) {
	const MENUS = [WORK_MENU, LIFE_MENU, HOBBY_MENU, WISH_MENU, HEALTH_MENU, HABIT_MENU];

	return (
		<div className="input-container">
			<div className="input__memos__form">
				<div className="input__menus" onClick={(e) => handleInputMenu(e.target.value)}>
					{MENUS.map((menu, i) => (
						<RadioMenu key={i} menu={menu} currentMenu={currentMenu} />
					))}
				</div>

				<div className="input__memo">
					<textarea
						className="input__memo__text"
						value={text}
						onChange={(e) => changeInputText(e.target.value)}
					/>
				</div>
			</div>

			<div className="input__memo__submit">
				<button onClick={handleSubmit}>
					<i className="fa fa-paper-plane input__memo__submit__btn" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	);
}
