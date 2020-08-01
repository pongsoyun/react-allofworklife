import React, { useState, useEffect } from 'react';

export default function Memo() {
	const [memos, setMemos] = useState(JSON.parse(localStorage.getItem('memos') || []));
	console.log(memos);

	// * 메모 추가하기
	useEffect(() => {
		console.log('바뀌어얗 정저앚서지다머나리ㅗㅓㅈㄷ모나');
		// setMemos(JSON.parse(localStorage.getItem('memos') || []));
	}, [memos.length]);

	function createMemoForm({ menu, text, id }) {
		return (
			<li className="memo">
				<div className="memo__text" id={id}>
					{text}
				</div>
				<div className="memo__info">
					<span className="memo__menu" id={id}>
						{menu}
					</span>
					<i className="fas fa-trash-alt memo__delete__btn" id={id}></i>
				</div>
			</li>
		);
	}

	return memos.map((memo) => createMemoForm(memo));
}