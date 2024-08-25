import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TASKS_STORAGE_KEY = '@tasks';

export const getTasks = async (): Promise<Task[]> => {
  try {
    const tasksJson = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  } catch (error) {
    console.error('Error getting tasks:', error);
    return [];
  }
};

export const saveTasks = async (tasks: Task[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

export const addTask = async (title: string): Promise<Task> => {
  const tasks = await getTasks();
  const newTask: Task = {
    id: Date.now().toString(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  await saveTasks(tasks);
  return newTask;
};
