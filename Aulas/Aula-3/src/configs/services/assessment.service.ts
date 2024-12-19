import { CreateAssessmentRequest } from '../../utils/types/assessment';
import { api, ResponseAPI } from './api.service';

export async function createAssessmentService(
	data: CreateAssessmentRequest & { token: string; studentId: string }
): Promise<ResponseAPI> {
	try {
		const { token, studentId, ...restData } = data;
		const response = await api.post('/assessments', restData, {
			headers: {
				Authorization: token,
				'x-student-id': studentId,
			},
		});

		return {
			success: response.data.success,
			message: response.data.message,
			data: response.data.data,
		};
	} catch (error: any) {
		return {
			success: error.response.data.success,
			message: error.response.data.message,
		};
	}
}

export async function findAllAssessmentsService(token: string): Promise<ResponseAPI> {
    try {
        const response = await api.get('/assessments', {
            headers: {
                Authorization: token,
            },
        });
        return {
            success: response.data.success,
            message: response.data.message,
            data: response.data.data,
        };
    } catch (error: any) {
        return {
            success: error.response.data.success,
            message: error.response.data.message,
        };
    }
}
