/*
 ** Todo
 */
export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  deadline: Date;
}

/*
 ** Form
 */
export interface Form {
  text: string;
}

/*
 ** Filter
 */
export interface Filter {
  filter: string;
}
