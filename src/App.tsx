import './App.sass';
import TodoEnter from './components/todoEnter/TodoEnter';
import Task from './components/Task/Task';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <TodoEnter />
      <TasksList />
    </div>
  );
}

export default App;
