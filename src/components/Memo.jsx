import React from 'react';

export default function Memo({ memos, deleteMemo, editMemo }) {
	function createMemoForm({ menu, text, id }) {
		return (
			<li className="memo">
				<div className="memo__text" id={id} menu={menu} onClick={(e) => editMemo(e)}>
					{text}
				</div>
				<div className="memo__info">
					<span className="memo__menu" id={id}>
						{menu}
					</span>
					<i
						className="fas fa-trash-alt memo__delete__btn"
						id={id}
						onClick={(e) => deleteMemo(e.target.id)}
					></i>
				</div>
			</li>
		);
	}

	return memos.map((memo) => createMemoForm(memo));
}
