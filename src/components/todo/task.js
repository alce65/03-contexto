import { Link } from 'react-router-dom';

export function Task({ task, deleteTask, updateTask }) {
    function handleClick() {
        deleteTask(task);
    }

    function handleChange() {
        updateTask(task);
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={handleChange}
            />
            <Link to={`/detail/${task.id}`}>
                <span className={task.isCompleted ? 'task-completed' : ''}>
                    {task.name}
                </span>{' '}
                -<span>{task.responsible}</span>
            </Link>

            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyPress={handleClick}
            >
                🗑️
            </div>
        </li>
    );
}

/* export function Task({task, deleteTask}) {
    return (
        <li>
            <div>{task}</div>
        </li>
    );
} */
