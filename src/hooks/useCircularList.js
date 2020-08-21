import { useState, useCallback, useMemo } from 'react';

export function useCircularList(list) {
	const [index, setIndex] = useState(0);

	const before = useCallback(() => {
		setIndex((prevIndex) => prevIndex - 1 || list.length - 1);
	}, [list.length]);

	const next = useCallback(() => {
		setIndex((prevIndex) => (prevIndex + 1) % list.length);
	}, [list.length]);

	const item = useMemo(() => list[index], [list, index]);

	return [item, before, next];
}
