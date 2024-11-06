import { useState } from "react";
import TodoRow from "./components/TodoRow"
import { dummyTodos } from "./data/todos"
import { Todo } from "./types/todo";
import AddTodoForm from "./components/AddTodoForm";

function App() {
const [todos, setTodos] = useState<Todo[]>(dummyTodos);

function handleToggle(id: number, isDone: boolean) {
  setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone} : todo));
  
  // 2. 위 코드와 동일한 코드
  // setTodos((prevTodos) =>
  //   prevTodos.map(todo => (
  //     todo.id === id ? {...todo, isDone} : todo
  //   ))
  // )
}

function handleAddTodo(title: string) {
  // 기존 todos 배열 1번째 자리에 새로운 todo 추가
  setTodos([{id: todos.length + 1, title, isDone: false}, ...todos]);

  // 마지막 자리에 새로운 todo 추가
  // setTodos([...todos, {id: todos.length + 1, title, isDone: false}]);
}

  return (
    <main className='py-10 h-screen space-y-10'>
      <h1 className='font-bold text-center text-3xl'>My Todo List</h1>
      <div className="max-w-md mx-auto bg-blue-50 p-5 rounded-md space-y-6">
      <AddTodoForm onSubmit={handleAddTodo} />
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
