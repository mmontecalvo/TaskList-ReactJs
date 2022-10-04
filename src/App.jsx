import { useState, useEffect } from 'react';
import TaskCreator from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilityControl from './components/VisibilityControl';
import Footer from './components/Footer';
import Swal from 'sweetalert2';

function App() {

  const [ tasksItems, setTasksItems ] = useState([]);
  const [ showCompleted, setShowCompleted ] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, {name: taskName, done: false}]);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Task saved!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'The task already exists!',
      })
    }
  }

  function toggleTask(task) {
    setTasksItems(tasksItems.map((t) => (t.name === task.name ? {...t, done: !t.done} : t)))
  }

  function cleanTasks() {
    Swal.fire({
      title: 'Do you want to clear the task completed list?',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear!',
    }).then((result) => {
      if (result.isConfirmed) {
        setTasksItems(tasksItems.filter(tasks => !tasks.done));
        setShowCompleted(false);
        Swal.fire('The task completed list has been cleared!', '', 'success')
      }
    })
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
      <Footer />
    </>
  );
}

export default App;
