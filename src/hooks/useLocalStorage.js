import { useState, useEffect } from 'react';

export function useLocalStorage({ key, defaultState }) {
	const [item, setItem] = useState(defaultState);

	useEffect(() => {
		const localStorageResult = localStorage.getItem(key);
		if (localStorageResult) {
			setItem(JSON.parse(localStorageResult));
		}
	}, [key]);

	useEffect(() => {
		if (item === defaultState) {
			return;
		}
		localStorage.setItem(key, JSON.stringify(item));
	}, [item, key]);

	return [item, setItem];
}
// 이게 머임
