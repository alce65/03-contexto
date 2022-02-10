import './todo.css';
import { useState, useEffect } from 'react';
import { Add } from './add';
import { Task } from './task';
import * as api from '../../services/api';

export function ToDo() {
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

    /* const aTasks = tasks.map((task, i) => {
        return <li key={i}>{task}</li>;
    }); */
    return (
        <>
            <Add addTask={addTask} />
            {tasks.length ? <h2>Lista de tareas</h2> : ''}
            <ul className="task-list">
                {tasks.map(
                    (task) => (
                        <Task
                            task={task}
                            deleteTask={deleteTask}
                            updateTask={updateTask}
                            key={task.id}
                        />
                    )
                    // new Task({task:task, i: i})
                    // class Task {
                    //    constructor(props) {}
                )}
            </ul>
            {/* <p>Opción 2</p>
            <ul>{aTasks}</ul> */}
        </>
    );
}
