import TaskRow from './TaskRow';

function TaskTable({title, tasks, toggleTask, toggleValue = false}) {

    const taskTableRows = (doneValue) => {
        return (
            tasks
            .filter(task => task.done === doneValue)
            .map((task) =>(
                <TaskRow key={task.name} task={task} toggleTask={toggleTask}/>
            ))
        )
    }

    return (
        <table className="taskTable">
            <thead className="taskTable__head">
                <tr>
                    <th className="head__title">{title}</th>
                </tr>
            </thead>
            <tbody className="taskTable__body">
                {
                    taskTableRows(toggleValue)
                }
            </tbody>
        </table>
    )
}

export default TaskTable
