import axios from 'axios';

const TASKS_API = 'http://localhost:4500/tasks/';

export function getAll() {
    return axios.get(TASKS_API);
    // return fetch(TASKS_API).then(resp => resp.json())
}
export function get(id) {
    return axios.get(TASKS_API + id);
    // return fetch(TASKS_API+id).then(resp => resp.json())
}
export function set(task) {
    return axios.post(TASKS_API, task);
    /* return fetch(TASKS_API, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) */
}
export function update(task) {
    return axios.patch(TASKS_API + task.id, task);
}
export function remove(id) {
    return axios.delete(TASKS_API + id);
}
