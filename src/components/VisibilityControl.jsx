import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

function VisibilityControl({showCompleted, setShowCompleted, cleanTasks}) {
    return (
        <div className="visibilityControl">
            <div className="visibilityControl__toggle">
                <Switch type="checkbox" checked={showCompleted} onChange={e => setShowCompleted(!showCompleted)} className="toggle" color="secondary"/>
                <label>Show Tasks Completed</label>
            </div>
            <Button variant="contained" className="visibilityControl__btnClear" onClick={() => cleanTasks()}disabled={!showCompleted} >Clear List</Button>
        </div>
    )
}

export default VisibilityControl

// AGREGAR UN SWEET ALERT DE CONFIRMACIÓN AL BOTÓN DE CLEAR