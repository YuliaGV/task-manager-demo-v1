export interface Task {
    id: number;
    title: string;
    createdAt: Date;
    dueDate?: Date;
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
}
  