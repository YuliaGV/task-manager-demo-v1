export interface Task {
    id: number;
    title: string;
    createdAt: Date;
    dueDate?: Date | undefined;
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
}
  