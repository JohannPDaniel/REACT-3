export interface Assessment {
  id: string;
  title: string;
  description: string;
  grade: number;
  createdAt: string;
  // studentId: string;
}

export type CreateAssessment = Pick<
  Assessment,
  "title" | "description" | "grade"
>;

export type UpdateAssessment = Partial<CreateAssessment> & { id: string };
