import { Todo } from "../types/todo";
import { useState, useEffect } from "react";


export default function useTodos() { // 커스텀 훅 생성 (use + 커스텀 훅 이름 형태로 지어야함)
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

    return { 
        todos, 
        setTodoDone, 
        handleAddTodo, 
        handleDeleteTodo, 
        handleDeleteAll, 
        handleDeleteDone 
    };
}
