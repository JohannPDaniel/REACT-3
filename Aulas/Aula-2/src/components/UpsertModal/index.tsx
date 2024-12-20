import {
	Modal,
	Box,
	Grid2,
	Typography,
	FormControl,
	FormLabel,
	TextField,
	Button,
} from '@mui/material';
// import { useState, useEffect } from "react";
import { style } from './styles';
import {
	FieldsErrors,
	validateFormAssessment,
} from '../../utils/validators/assessment.validator';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	createAssessment,
	setEditAssessment,
	updateAssessment,
} from '../../store/modules/assessments/assessmentsSlice';
import { Assessment } from '../../utils/types/assessment';

interface UpsertModalProps {
	open: boolean;
	onClose: () => void;
}

export function UpsertModal({ open, onClose }: UpsertModalProps) {
	const dispatch = useAppDispatch();
	const { errors, success, editAssessments } = useAppSelector(
		(state) => state.assessments
	);

	const [fieldsErrors, setFieldsErrors] = useState<FieldsErrors>({
		title: '',
		description: '',
		grade: '',
	});
	const [assessment, setAssessment] = useState<Assessment>({} as Assessment);

	function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const title = event.currentTarget['title-assessment'].value;
		const grade = Number(event.currentTarget['grade-assessment'].value);
		const description = event.currentTarget['desc-assessment'].value;

		const errors = validateFormAssessment(title, description, grade);
		const hasError = Object.keys(errors);
		if (hasError.length) {
			setFieldsErrors(errors);
			return;
		}

		// Se passar, limpar os errors
		setFieldsErrors({} as FieldsErrors);

		const data = { title, grade, description };

		if (editAssessments.id) {
			// MODO EDIT
			dispatch( updateAssessment( { id: editAssessments.id, ...data } ) );
		} else {
			// MODO CREATE
			dispatch(createAssessment(data));
		}
	}

	function handleClose() {
		dispatch(setEditAssessment({} as Assessment));
		setAssessment({} as Assessment);
		onClose();
	}

	useEffect(() => {
		if (!errors && success) {
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [errors, success]);

	useEffect(() => {
		if (editAssessments.id) {
			setAssessment(editAssessments);
		}
	}, [editAssessments]);

	return (
		<Modal
			open={open || !!editAssessments.id}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<Box sx={style}>
				<form onSubmit={onSubmit}>
					<Grid2
						container
						spacing={1}>
						<Grid2 size={12}>
							<Typography variant='h6'>
								{editAssessments.id ? 'Edit' : 'New'} Assessment
							</Typography>
						</Grid2>

						{/** Titulo */}
						<Grid2 size={12}>
							<FormControl
								fullWidth
								error={!!fieldsErrors.title}>
								<FormLabel htmlFor='title-assessment'>Title</FormLabel>
								<TextField
									id='title-assessment'
									name='title-assessment'
									type='text'
									placeholder='My title...'
									variant='outlined'
									fullWidth
									required
									error={!!fieldsErrors.title}
									helperText={fieldsErrors.title}
									value={assessment.title}
									onChange={(e) =>
										setAssessment((prev) => ({
											...prev,
											title: e.target.value,
										}))
									}
								/>
							</FormControl>
						</Grid2>

						{/** Nota */}
						<Grid2 size={12}>
							<FormControl
								fullWidth
								error={!!fieldsErrors.grade}>
								<FormLabel htmlFor='grade-assessment'>Grade</FormLabel>
								<TextField
									id='grade-assessment'
									name='grade-assessment'
									type='number'
									placeholder='10'
									variant='outlined'
									fullWidth
									required
									error={!!fieldsErrors.grade}
									helperText={fieldsErrors.grade}
									value={assessment.grade}
									onChange={(e) =>
										setAssessment((prev) => ({
											...prev,
											grade: Number(e.target.value),
										}))
									}
									inputProps={{
										step: 0.01,
									}}
								/>
							</FormControl>
						</Grid2>

						{/** Descrição */}
						<Grid2
							size={12}
							mb={2}>
							<FormControl
								fullWidth
								error={!!fieldsErrors.description}>
								<FormLabel htmlFor='desc-assessment'>Description</FormLabel>
								<TextField
									id='desc-assessment'
									name='desc-assessment'
									type='text'
									placeholder='My description...'
									variant='outlined'
									fullWidth
									multiline
									rows={3}
									required
									error={!!fieldsErrors.description}
									helperText={fieldsErrors.description}
									value={assessment.description}
									onChange={(e) =>
										setAssessment((prev) => ({
											...prev,
											description: e.target.value,
										}))
									}
								/>
							</FormControl>
						</Grid2>

						<Grid2 size={6}>
							<Button
								variant='contained'
								color='warning'
								fullWidth
								type='reset'
								onClick={handleClose}>
								Cancel
							</Button>
						</Grid2>
						<Grid2 size={6}>
							<Button
								variant='contained'
								fullWidth
								type='submit'>
								Submit
							</Button>
						</Grid2>
					</Grid2>
				</form>
			</Box>
		</Modal>
	);
}
