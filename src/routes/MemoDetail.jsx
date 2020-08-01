import React from 'react';

export default function MemoDetail(props) {
	const text = props.location.state.text;
	// const id = props.location.state.id;
	const menu = props.location.state.menu;

	return (
		<div>
			<h1>{text}</h1>
			<span>{menu}</span>
		</div>
	);
}
