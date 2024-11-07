export interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: 'baja' | 'media' | 'alta';
  status: 'inicial' | 'en ejecución' | 'terminada';
  category: 'personal' | 'laboral' | 'social';
  notes?: string;
}
