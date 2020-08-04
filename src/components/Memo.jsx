import React from 'react';

export default function Memo({ filter, memos, deleteMemo, editMemo }) {
	function createMemoForm({ menu, text, id }) {
		return (
			<li className="memo">
				<div className="memo__text" id={id} onClick={(e) => editMemo(e.target, menu)}>
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

	return memos.map((memo) => {
		if (memo.menu === filter || filter === 'all') return createMemoForm(memo);
	});
}
