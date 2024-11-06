import { useState } from "react";
import TodoRow from "./components/TodoRow"
import { dummyTodos } from "./data/todos"
import { Todo } from "./types/todo";

function App() {
const [todos, setTodos] = useState<Todo[]>(dummyTodos);

const handleToggle = (id: number, isDone: boolean) => {
  setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone} : todo));
  
  // setTodos((prevTodos) =>
  //   prevTodos.map(todo => (
  //     todo.id === id ? {...todo, isDone} : todo
  //   ))
  // )
}

  return (
    <main className='py-10 h-screen space-y-10'>
      <h1 className='font-bold text-center text-3xl'>My Todo List</h1>
      <div className="max-w-md mx-auto bg-blue-50 p-5 rounded-md">
        <div className="space-y-2">
          {/* todo list */}   
          {todos.map((todo) => (
              <TodoRow key={todo.id} todo={todo} onToggle={handleToggle} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
