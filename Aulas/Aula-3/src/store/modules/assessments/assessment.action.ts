import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateAssessmentRequest } from '../../../utils/types/assessment';
import {
	createAssessmentService,
	findAllAssessmentsService,
} from '../../../configs/services/assessment.service';
import { RootState } from '../..';
import { showAlert } from '../Alert/Alert';

export const createAssessmentAsyncThunk = createAsyncThunk(
	'assessment/create',
	async (data: CreateAssessmentRequest, { getState, dispatch }) => {
		const { userLogged } = getState() as RootState;
		const response = await createAssessmentService({
			...data,
			token: userLogged.token,
		});

		if (!response.success) {
			dispatch(
				showAlert({
					type: 'error',
					message: response.message,
				})
			);
			return response;
		}

		dispatch(
			showAlert({
				type: 'success',
				message: response.message,
			})
		);

		return response;
	}
);

export const findAllAssessmentsAsyncThunk = createAsyncThunk(
	'assessment/findAll',
	async (_, { getState, dispatch }) => {
		const { userLogged } = getState() as RootState;
		const { token } = userLogged;
		const response = await findAllAssessmentsService(token);

		if (!response.success) {
			dispatch(
				showAlert({
					type: 'error',
					message: response.message,
				})
			);
		}
		return response;
	}
);
