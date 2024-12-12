export const isSequential = (password: string): boolean => {
	let sequenceCount = 0;
	for (let i = 0; i < password.length - 1; i++) {
		const currentChar = parseInt(password[i]);
		const nextChar = parseInt(password[i + 1]);

		if (isNaN(currentChar) || isNaN(nextChar)) {
			sequenceCount = 0;
			continue;
		}

		if (Math.abs(nextChar - currentChar) === 1) {
			sequenceCount++;
		} else {
			sequenceCount = 0;
		}
	}

	return sequenceCount >= 2;
};
