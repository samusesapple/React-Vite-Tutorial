// components
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
// hooks
import useTodos from "./hooks/useTodos";

function App() {
  const { 
    todos, 
    handleAddTodo, 
    setTodoDone, 
    handleDeleteTodo, 
    handleDeleteAll, 
    handleDeleteDone 
  } = useTodos();

  return (
    <main className='py-10 h-screen space-y-4 overflow-y-auto'>
      <h1 className='font-bold text-center text-3xl pb-6'>
        My Todo List
      </h1>
      <div className="max-w-md mx-auto bg-blue-50 p-5 rounded-md space-y-6">
        <AddTodoForm onSubmit={handleAddTodo} />
        <TodoList todos={todos} onDoneToggle={setTodoDone} onDelete={handleDeleteTodo} />
      </div>
      <div className="max-w-md mx-auto">
        {todos.length > 0 && (
          <TodoSummary todos={todos} onDeleteAll={handleDeleteAll} onDeleteDone={handleDeleteDone} /> 
        )}
      </div>
    </main>
  )
}

export default App
