import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	Assessment,
	CreateAssessment,
	UpdateAssessment,
} from '../../../utils/types/assessment';

// Nome
// Valor inicial
// Ações

interface InitialState {
	data: Array<Assessment>;
	editAssessments: Assessment;
	errors: string;
	success: boolean;
}

const initialState: InitialState = {
	data: [], // lista de avaliações
	editAssessments: {} as Assessment,
	errors: '', // algum error que eu quero exibir
	success: false, // indicador de sucesso
};

const assessmentsSlice = createSlice({
	name: 'assessments',
	initialState,
	reducers: {
		createAssessment(state, action: PayloadAction<CreateAssessment>) {
			state.errors = '';
			state.success = false;

			// criar a nova avaliação
			const newAssessment: Assessment = {
				id: crypto.randomUUID(),
				title: action.payload.title,
				description: action.payload.description,
				grade: action.payload.grade,
				createdAt: new Date().toDateString(),
			};

			// jogar para lista (data)
			state.data.push(newAssessment);
			// state.data = [...state.data, newAssessment]

			state.errors = '';
			state.success = true;
			return state;
		},

		setAssessments: (state, action: PayloadAction<Assessment[]>) => {
			state.data = action.payload.map((assessment) => ({
				...assessment,
				createdAt: new Date(assessment.createdAt).toISOString(),
			}));
		},
		setEditAssessment(state, action: PayloadAction<Assessment>) {
			state.editAssessments = action.payload;
			return state;
		},
		updateAssessment(state, action: PayloadAction<UpdateAssessment>) {
			state.errors = '';
			state.success = false;

			const index = state.data.findIndex((ass) => ass.id === action.payload.id);

			if (index === -1) {
				state.errors = 'Assessment not found!';
				return state;
			}

			// state.data[index].title = title || state.data[index].title;
			// state.data[index].description =
			//   description || state.data[index].description;
			// state.data[index].grade = grade || state.data[index].grade;

			state.data[index] = {
				...state.data[index],
				...action.payload,
			};

			state.errors = '';
			state.success = true;
      state.editAssessments = {} as Assessment

			return state;
		},
		deleteAssessment(state, action: PayloadAction<string>) {
			// Acha index => splice
			// filter !=
			state.errors = '';
			state.success = false;

			const index = state.data.findIndex((ass) => ass.id === action.payload); // "120asmdioasmdias1-023S"

			if (index === -1) {
				state.errors = 'Not found';
				state.success = false;
				return state;
			}

			state.data.splice(index, 1);
			state.errors = '';
			state.success = true;

			return state;
		},
	},
});

// setListAssessments({ ...listAssessments, data: [] });
// setListAssessments({ ...listAssessments, errors: "meu aeurnauin" });

export const {
	createAssessment,
  setAssessments,
	setEditAssessment,
	updateAssessment,
	deleteAssessment,
} = assessmentsSlice.actions;
export const assessmentsReduce = assessmentsSlice.reducer;
