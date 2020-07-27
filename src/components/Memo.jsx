import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Memo extends Component {
	constructor(props) {
		super(props);
		this.memos = [
			{ id: '1', text: 'you have to do ! ', menu: 'life' },
			{ id: '2', text: 'drink water ', menu: 'habit' },
			{ id: '3', text: 'go to the gym ', menu: 'health' },
		];
	}

	createMemo({ id, text, menu }) {
		console.log(id, text, menu);
		return (
			<div>
				<h3>
					{id} : {text}
				</h3>
				<span>.... {menu}</span>
			</div>
		);
	}

	render() {
		return this.memos.map((memo) => this.createMemo(memo));
	}
}

Memo.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	menu: PropTypes.string.isRequired,
};

export default Memo;
