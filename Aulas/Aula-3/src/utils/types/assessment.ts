export interface Assessment {
	id: string;
	title: string;
	description: string;
	grade: number;
	createdAt: string;
	studentId: string;
}

export type CreateAssessmentRequest = Pick<
	Assessment,
	'title' | 'description' | 'grade' | 'studentId'
>;

export type UpdateAssessment = Partial<CreateAssessmentRequest> & {
	id: string;
};
