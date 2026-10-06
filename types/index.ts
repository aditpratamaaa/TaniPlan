export interface User {
  id: string;
  name: string;
  phoneNumber: string;
}

export interface Schedule {
  id: string;
  title: string;
  date: string; // ISO format
  description?: string;
  isCompleted: boolean;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  description: string;
  category: string;
}
