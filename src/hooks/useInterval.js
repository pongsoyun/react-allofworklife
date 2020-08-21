import { useEffect } from 'react';

export function useInterval(callback, delayTime) {
	useEffect(() => {
		const intervalId = setInterval(() => {
			callback();
		}, delayTime);

		return () => {
			clearInterval(intervalId);
		};
	}, [callback, delayTime]);
}
