import { Todo } from "../types/todo";

interface TodoRowProps {
    todo: Todo;
    onToggle: (id: number, isDone: boolean) => void;
}

export default function TodoRow({ todo, onToggle }: TodoRowProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md border-gray-400 bg-white hover:bg-slate-50 p-2">
                <input type="checkbox" className="scale-120" checked={todo.isDone} onChange={(e) => onToggle(todo.id, e.target.checked)}/>
                <span className={todo.isDone ? 'line-through text-gray-500' : ''}>{todo.title}</span>
            </label>
        </div>
    )
}