export interface ValidationResponse {
	isValid: boolean;
	errorMessage: string | null;
	field?: 'password' | 'repeatPassword';
}

export const validateEmail = (email: string): ValidationResponse => {
	const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@(gmail|hotmail|outlook)\.com$/;

	if (!email.includes('@')) {
		return {
			isValid: false,
			errorMessage: 'O Email deve conter (@) para ser válido',
		};
	}
	if (!/^[a-zA-Z0-9._%+-]{3,}@/.test(email)) {
		return {
			isValid: false,
			errorMessage: 'O Email deve conter pelo menos 3 letras antes do (@)',
		};
	}
	if (!email.includes('.com')) {
		return {
			isValid: false,
			errorMessage: 'O final do e-mail deve conter (.com)',
		};
	}
	if (!emailRegex.test(email)) {
		return {
			isValid: false,
			errorMessage:
				'O domínio do email deve ser (gmail), (hotmail) ou (outlook) para ser válido',
		};
	}
	return { isValid: true, errorMessage: null };
};

export const validatePassword = (
	password: string,
	repeatPassword: string
): ValidationResponse => {
	const isSequential = (password: string): boolean => {
		let sequenceCount = 0;
		for (let i = 0; i < password.length - 1; i++) {
			const currentChar = parseInt(password[i]);
			const nextChar = parseInt(password[i + 1]);

			if (isNaN(currentChar) || isNaN(nextChar)) {
				sequenceCount = 0;
				continue;
			}

			if (nextChar - currentChar === 1 || currentChar - nextChar === 1) {
				sequenceCount++;
				if (sequenceCount >= 2) return true;
			} else {
				sequenceCount = 0;
			}
		}
		return false;
	};

	if (password.length < 4) {
		return {
			isValid: false,
			errorMessage: 'A Senha deve conter mais de 4 caracteres.',
			field: 'password',
		};
	}

	if (isSequential(password)) {
		return {
			isValid: false,
			errorMessage:
				'A Senha não pode ser um conjunto de caracteres sequênciais. Ex:. (1123456)',
			field: 'password',
		};
	}

	if (password !== repeatPassword) {
		return {
			isValid: false,
			errorMessage: 'As Senhas devem ser iguais',
			field: 'repeatPassword',
		};
	}

	return { isValid: true, errorMessage: null };
};
