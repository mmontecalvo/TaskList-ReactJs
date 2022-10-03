import { useState, useEffect } from 'react';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';

function App() {

  const [ tasksItems, setTasksItems ] = useState([]);
  const [ showCompleted, setShowCompleted ] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, {name: taskName, done: false}]);
    } else {
      alert("Tarea ya existe") // Agregar sweetAlert
    }
  }

  function toggleTask(task) {
    setTasksItems(tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done} : t)))
  }

  function cleanTasks() {
    setTasksItems(tasksItems.filter(tasks => !tasks.done));
    setShowCompleted(false);
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, [ ])
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems])

  return (
    <>
      <TaskCreator createNewTask={createNewTask}/>
      <TaskTable title={"Tasks"} tasks={tasksItems} toggleTask={toggleTask} />
      <VisibilityControl showCompleted={showCompleted} setShowCompleted={setShowCompleted} cleanTasks={cleanTasks}/>
      {
        showCompleted === true && (
          <TaskTable title={"Tasks Completed"} tasks={tasksItems} toggleTask={toggleTask} toggleValue={true}/>
        )
      }
    </>
  );
}

export default App;
