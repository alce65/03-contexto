/* eslint-disable react/no-typos */
import { useState, useContext } from 'react';
import { Context } from '../../context/context-provider';
import { Task } from '../../models/task';

export function Add() {
    const [newTask, setNewTask] = useState(new Task());
    const { addTask } = useContext(Context);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('Added task', newTask);
        addTask(newTask);
        setNewTask(new Task());
    };

    const handleChange = (ev) => {
        setNewTask({ ...newTask, [ev.target.name]: ev.target.value });
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
