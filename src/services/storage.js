import { TASKS } from '../models/tasks.data';

const store = 'Tareas-React';

// Array<Tarea>
export async function getTasks() {
    return localStorage.getItem(store)
        ? JSON.parse(localStorage.getItem(store))
        : TASKS;
}

export async function setTasks(tasks) {
    localStorage.setItem(store, JSON.stringify(tasks));
}

export async function removeTasks() {
    localStorage.removeItem(store);
}
