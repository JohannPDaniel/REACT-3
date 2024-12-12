import { isSequential } from "./isSequential";

export function validate(
	email: string,
	password: string,
	repeatPassword: string,
	setErrors: (errors: {
		email?: string;
		password?: string;
		repeatPassword?: string;
	}) => void
): boolean {
	if (!email) {
		setErrors({ email: 'Email é obrigatório !!!' });
		return false;
	}

	if (!email.includes('@')) {
		setErrors({ email: 'O Email deve conter (@) para ser válido' });
		return false;
	}

	if (!/^[a-zA-Z0-9._%+-]{3,}@/.test(email)) {
		setErrors({
			email: 'O Email deve conter pelo menos 3 letras antes do (@)',
		});
		return false;
	}

	if (!/(gmail\.com|hotmail\.com|outlook\.com)$/.test(email)) {
		setErrors({
			email:
				'O Email deve ser de um domínio válido (gmail.com, hotmail.com ou outlook.com)',
		});
		return false;
	}

	if (!password) {
		setErrors({ password: 'Password é obrigatório !!!' });
		return false;
	}

	if (password.length < 4) {
		setErrors({ password: 'A Senha deve conter mais de 4 caracteres.' });
		return false;
	}

	if (isSequential(password)) {
		setErrors({
			password:
				'A senha não pode ser um conjunto de caracteres sequenciais (exemplo: 1123456)',
		});
		return false;
	}

	if (password !== repeatPassword) {
		setErrors({ repeatPassword: 'As senhas devem ser iguais.' });
		return false;
	}

	setErrors({});
	return true;
}
