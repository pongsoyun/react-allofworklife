import React, { useState, useEffect } from 'react';

export default function Memo() {
	const [memos, setMemos] = useState(JSON.parse(localStorage.getItem('memos') || []));
	console.log(memos);

	// * 메모 추가하기
	useEffect(() => {
		// setMemos(JSON.parse(localStorage.getItem('memos') || []));
	}, [memos.length]);

	function deleteMemo(deleteID) {
		const newMemos = memos.filter((memo) => memo.id !== deleteID);
		localStorage.setItem('memos', JSON.stringify(newMemos));
		setMemos(newMemos);
		// setTodos(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
	}

	function editMemo(memo) {
		console.log(memo.target);
		// console.log(memo.menu);
		const text = memo.target.innerText;
		const menu = memo.target.menu;
		const id = memo.target.id;

		// deleteMemo(id);
		console.log(`text : ${text}, menu: ${menu} , id : ${id}`);
		// * input 태그에 넣어줘야하는데..
	}

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
