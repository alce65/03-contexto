import { createContext, useState, useEffect } from 'react';
import * as api from '../services/api';

export const Context = createContext({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {},
    updateTask: () => {},
});

export function ContextProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.getAll().then((resp) => {
            console.log(resp);
            return setTasks(resp.data);
        });
    }, []);

    const addTask = (newTask) => {
        // const newTasks = [...tasks, newTask];
        // store.setTasks(newTasks).then(() => setTasks(newTasks));
        api.set(newTask).then((resp) => {
            setTasks([...tasks, resp.data]);
        });
    };

    const deleteTask = (task) => {
        // const newTasks = tasks.filter((item) => item.id !== task.id);
        // store.setTasks(newTasks).then(() => setTasks(newTasks));
        api.remove(task.id).then((resp) => {
            if (resp.status === 200) {
                setTasks(tasks.filter((item) => item.id !== task.id));
            }
        });
    };

    const updateTask = (task) => {
        /* const newTasks = tasks.map((item) =>
            item.id === task.id
                ? { ...item, isCompleted: !item.isCompleted }
                : item
        );
        store.setTasks(newTasks).then(() => setTasks(newTasks)); */
        api.update(task).then((resp) => {
            setTasks(
                tasks.map((item) =>
                    item.id === resp.data.id
                        ? { ...item, isCompleted: !item.isCompleted }
                        : item
                )
            );
        });
    };

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const finalContext = {
        tasks,
        addTask,
        deleteTask,
        updateTask,
    };

    return <Context.Provider value={finalContext}>{children}</Context.Provider>;
}
