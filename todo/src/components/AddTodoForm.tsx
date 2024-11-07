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
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input 
      className="rounded-s-sm grow border border-gray-300 p-2 focus:inline-block focus:outline-black"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Add a new todo"
      />
      <button 
      className="w-16 p-2 rounded-e-md bg-gray-800 text-white  hover:bg-black disabled:bg-gray-300"
      type="submit"
      disabled={input.trim() === ""}
      >
        Add
        </button>
    </form>
  )
}
