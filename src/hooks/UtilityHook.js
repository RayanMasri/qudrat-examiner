export default function useUtilityHook() {
	const shuffleArray = (array) => {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	};

	const setLocal = (id, data) => {
		localStorage.setItem(id, JSON.stringify(data));
	};

	const getLocal = (id) => {
		let result = localStorage.getItem(id);
		if (result) {
			return JSON.parse(result);
		}

		return null;
	};

	return {
		shuffleArray,
		setLocal,
		getLocal,
	};
}
