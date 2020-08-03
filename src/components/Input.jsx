import React, { useEffect, useState } from 'react';

export default function Input({ text, menu, handleInputMenu, handleSubmit, changeInputText }) {
	// const [menu, setMenu] = useState('work');
	// const [text, setText] = useState('');
	// // const [isInputText, setInputText] = useState('');

	// function createUUID() {
	// 	return '_' + Math.random().toString(36).substr(2, 9);
	// }

	// useEffect(() => {
	// 	// * iput 폼에서도 변경하는 모습 보여줘야됨
	// }, [text]);

	// function handleInputMenu(menuVal) {
	// 	if (menuVal !== undefined) setMenu(menuVal);
	// }

	// useEffect(() => {
	// 	console.log(menu);
	// }, [menu]);

	// function handleSubmit() {
	// 	const id = createUUID();
	// 	const db = JSON.parse(localStorage.getItem('memos'));
	// 	localStorage.setItem('memos', JSON.stringify([...db, { menu, text, id }]));
	// 	setText('');
	// }

	return (
		<form className="input-container" onSubmit={handleSubmit}>
			<div className="input__menus" onClick={(e) => handleInputMenu(e.target.value)}>
				<div>
					<input type="radio" name="menu" id="work" value="work" defaultChecked />
					<label for="work">Work</label>
				</div>
				<div>
					<input type="radio" name="menu" id="life" value="life" />
					<label for="life">Life</label>
				</div>
				<div>
					<input type="radio" name="menu" id="hobby" value="hobby" />
					<label for="hobby">Hobby</label>
				</div>
				<div>
					<input type="radio" name="menu" id="wish" value="wish" />
					<label for="wish">Wish</label>
				</div>
				<div>
					<input type="radio" name="menu" id="health" value="health" />
					<label for="health">Health</label>
				</div>
				<div>
					<input type="radio" name="menu" id="habit" value="habit" />
					<label for="habit">Habit</label>
				</div>
			</div>

			<div className="input__memo">
				{/* <input type="textarea" value={text} onChange={(e) => setText(e.target.value)} /> */}
				<input type="textarea" value={text} onChange={(e) => changeInputText(e.target.value)} />
			</div>

			<div class="input__memo__submit">
				{/* <input type="submit" value="추가" /> */}
				<input type="submit" submit={handleSubmit}>
					{/* <i class="fa fa-paper-plane input__memo__submit__btn" aria-hidden="true"></i> */}
				</input>
			</div>
		</form>
	);
}
