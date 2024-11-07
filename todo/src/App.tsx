import { Todo } from "./types/todo";
import { useState, useEffect } from "react";
// components
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
const [todos, setTodos] = useState<Todo[]>(() => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => { // 컴포넌트가 생성될 때 최초 1회 실행됨
  localStorage.setItem('todos', JSON.stringify(todos)); // localStorage에 todos 상태 저장 (localStorage는 string만 저장 가능함)
}, [todos]); // todos 상태가 변경될 때마다 실행되도록 설정

function setTodoDone(id: number, isDone: boolean) {
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
  setTodos([{id: Date.now(), title, isDone: false}, ...todos]);

  // 마지막 자리에 새로운 todo 추가
  // setTodos([...todos, {id: todos.length + 1, title, isDone: false}]);
}

function handleDeleteTodo(id: number) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

function handleDeleteAll() {
  if (todos.length === 0) {
    alert("삭제할 항목이 없습니다.");
    return;
  }

  setTodos([]);
  }

function handleDeleteDone() {
  if (todos.filter((todo) => todo.isDone).length === 0) {
    alert("삭제할 항목이 없습니다.");
    return;
  }
  setTodos(todos.filter((todo) => !todo.isDone));
}

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
