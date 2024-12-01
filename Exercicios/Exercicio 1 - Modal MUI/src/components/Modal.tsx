/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Button, Modal, TextField } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import { Typography } from '@mui/material';

interface FadeProps {
	children: React.ReactElement<any>;
	in?: boolean;
	onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
	onExited?: (node: HTMLElement, isAppearing: boolean) => void;
	ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
	props,
	ref
) {
	const { children, in: open, onEnter, onExited, ...other } = props;

	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter(null as any, true);
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited(null as any, true);
			}
		},
	});

	return (
		<animated.div
			ref={ref}
			style={style}
			{...other}>
			{React.cloneElement(children)}
		</animated.div>
	);
});

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: 3,
	p: 4,
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
};

interface SpringModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function SpringModal({ isOpen, onClose }: SpringModalProps) {
	const [errors, setErrors] = useState({ nome: false, password: false });

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const dataBody = {
			nome: e.currentTarget.nome.value.trim(),
			password: e.currentTarget.password.value.trim(),
		};

		const newErrors = {
			nome: dataBody.nome === '',
			password: dataBody.password === '',
		};

		setErrors(newErrors);

		if (!newErrors.nome && !newErrors.password) {
			console.log('Form submitted:', dataBody);
			onClose();
		}
	};

	return (
		<Modal
			aria-labelledby='spring-modal-title'
			aria-describedby='spring-modal-description'
			open={isOpen}
			onClose={onClose}
			closeAfterTransition>
			<Fade in={isOpen}>
				<Box
					component='form'
					noValidate
					autoComplete='off'
					sx={modalStyle}
					onSubmit={onSubmit}
					onClick={(e) => e.stopPropagation()}>
					<Typography
						variant='h4'
						sx={{ alignSelf: 'center' }}>
						Login
					</Typography>
					<TextField
						error={errors.nome}
						fullWidth
						label='Nome'
						id='name'
						name='nome'
						required
						helperText={errors.nome ? 'Campo obrigatório.' : ''}
					/>
					<TextField
						error={errors.password}
						fullWidth
						label='Password'
						id='password'
						name='password'
						required
						helperText={errors.password ? 'Campo obrigatório.' : ''}
					/>
					<Box sx={{ display: 'flex', gap: 2, justifyContent: 'end' }}>
						<Button
							variant='contained'
							color='error'
							onClick={onClose}>
							Cancelar
						</Button>
						<Button
							type='submit'
							variant='contained'
							color='success'>
							Entrar
						</Button>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
}
