import Checkbox from '@mui/material/Checkbox';

function TaskRow({task, toggleTask}) {
    return (
        <tr className="taskRow">
            <td>
                <Checkbox className="taskRow__checkbox" checked={task.done} onChange={() => toggleTask(task)}  sx={{ '& .MuiSvgIcon-root': { fontSize: 24 } }}/>
                <span className="taskRow__name">{task.name}</span>
            </td>
        </tr>
    )
}

export default TaskRow
