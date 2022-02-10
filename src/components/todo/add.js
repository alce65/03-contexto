/* eslint-disable react/no-typos */
import { useState } from 'react';
import { Task } from '../../models/task';

export function Add({ addTask }) {
    const [newTask, setNewTask] = useState(new Task());

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('Added task', newTask);
        addTask(newTask);
        setNewTask(new Task());
    };

    const handleChange = (ev) => {
        /* switch (ev.target.name) {
            case 'name':
                setNewTask({ ...newTask, name: ev.target.value });
                break;
            case 'responsible':
                setNewTask({ ...newTask, responsible: ev.target.value });
                break;
            default:
        } */
        setNewTask({ ...newTask, [ev.target.name]: ev.target.value });
        // setNewTask(newTask[ev.target.name] = ev.target.value);
    };

    return (
        <>
            <h2>Add Tarea</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre de la tarea"
                    value={newTask.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="responsible"
                    placeholder="Responsable de la de la tarea"
                    value={newTask.responsible}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}
