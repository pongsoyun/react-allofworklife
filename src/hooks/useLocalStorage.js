import { useState, useEffect } from 'react';

export function useLocalStorage({ key, defaultState }) {
	const [item, setItem] = useState(defaultState);

	useEffect(() => {
		const localStorageResult = localStorage.getItem(key);

		if (localStorageResult) {
			setItem(JSON.parse(localStorageResult));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(item));
	}, [item]);

	return [item, setItem];
}
