import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TaskCreator({createNewTask}) {

    const [ newTaskName, setNewTaskName ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName('')
    }

    const handleChange = (e) => {
        setNewTaskName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="taskCreator">
            <div className="taskCreator__input">
                <TextField id="filled-basic" label="Enter a new task..." variant="filled" value={newTaskName} onChange={handleChange} className="input" color="secondary" sx={{
                input: {
                    color: "#F0EFF4",
                    fontSize: "14px",
                }}}/>
            </div>
            <Button type="submit" variant="contained" className="taskCreator__btn">Save task</Button>
        </form>
    )
}

export default TaskCreator
