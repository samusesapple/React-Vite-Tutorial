import { Todo } from "../types/todo";
import TodoRow from "./TodoRow";

interface TodoListProps {
    todos: Todo[];
    onDoneToggle: (id: number, isDone: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({ todos, onDoneToggle, onDelete }: TodoListProps) {
    // side effect 발생하지 않도록 정렬해서 변수에 저장
    const sortedTodos = todos.sort((a, b) => {
        if (a.isDone === b.isDone) { 
            return b.id - a.id; // 같으면 id 역순으로 정렬
        }
        return a.isDone ? 1 : -1; // 완료된 항목은 마지막에 배치
    });

    return (
        <>
            <div className="space-y-2">
            {sortedTodos.map((todo) => (
                <TodoRow key={todo.id} todo={todo} onDoneToggle={onDoneToggle} onDelete={onDelete} />
            ))}
            </div>
            {todos.length === 0 && 
            <p 
                className="text-center text-sm font-semibold text-gray-500"
            >
                No todos yet. Add one!
            </p>}
        </>
    )
}