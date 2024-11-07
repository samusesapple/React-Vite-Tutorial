import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo";

interface TodoRowProps {
    todo: Todo;
    onDoneToggle: (id: number, isDone: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoRow({ todo, onDoneToggle, onDelete }: TodoRowProps) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex grow items-center gap-2 border rounded-md border-gray-400 bg-white hover:bg-slate-50 p-2">
                <input type="checkbox" className="scale-120" checked={todo.isDone} onChange={(e) => onDoneToggle(todo.id, e.target.checked)}/>
                <span className={todo.isDone ? 'line-through text-gray-500' : ''}>{todo.title}</span>
            </label>
            <button 
                className="p-2"
                onClick={() => onDelete(todo.id)}>
                    <Trash2 size={20} className="text-gray-500 hover:text-gray-600" />
            </button>
        </div>
    )
}