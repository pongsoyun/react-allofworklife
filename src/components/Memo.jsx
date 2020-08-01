import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Memo() {
	const memos = JSON.parse(localStorage.getItem('memos') || []);
	console.log(memos);

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
