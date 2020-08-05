import React, { useEffect, useState } from 'react';

export default function Input({ text, menu, handleInputMenu, handleSubmit, changeInputText }) {
	return (
		<div className="input-container">
			<div className="input__memos__form">
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
				{/* <input type="submit" submit={handleSubmit} className="input__memo__submit__btn"></input> */}
			</div>
		</div>
	);
}
