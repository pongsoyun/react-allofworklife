import React from 'react';
import MemoForm from './MemoForm';
import { ALL_MENU } from '../constants/menus';

export default function Memo({ filter, memos, deleteMemo, editMemo }) {
	return (
		<main className="memos__container">
			{memos
				.filter((memo) => memo.menu === filter || filter === ALL_MENU)
				.map((memo) => (
					<MemoForm
						menu={memo.menu}
						text={memo.text}
						id={memo.id}
						editMemo={editMemo}
						deleteMemo={deleteMemo}
					/>
				))}
		</main>
	);
}
