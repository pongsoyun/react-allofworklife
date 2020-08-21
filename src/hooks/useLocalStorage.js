import React, { useState, useEffect } from 'react';

export default function useLocalStorage(key) {
	const [item, setItem] = useState();

	useEffect(() => {
		const localStorageItem = localStorage.getItem(key);
		if (localStorageItem) {
			setItem(JSON.parse(localStorageItem));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(item));
	}, [item]);

	return [item, setItem];
}
