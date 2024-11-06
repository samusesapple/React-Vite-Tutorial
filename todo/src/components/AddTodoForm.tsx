import { useState } from "react";

interface AddTodoFormProps {
onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
const [input, setInput] = useState<string>("");

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault(); // submit 할 때마다 페이지 새로고침되서 input 값 초기화되는 것 방지
    if (input.trim() !== "") { // 입력값이 비어있지 않으면
        // 새로운 todo 추가
        onSubmit(input);
        setInput("");
    }
}

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Add a new todo"
      className="rounded-s-md grow border-1 border-gray-200 p-2 focus:outline-double focus:outline-1 focus:outline-blue-500"
      />
      <button 
      type="submit"
      disabled={input.trim() === ""}
      className="w-16 rounded-e-md bg-blue-300 text-white  hover:bg-blue-500 disabled:bg-gray-300"
      >
        Add
        </button>
    </form>
  )
}
