import { Todo } from "../types/todo";
import DeleteAllButton from "./DeleteAllButton";
import DeleteDoneTodoButton from "./DeleteDoneTodoButton";

interface TodoSummaryProps {
    todos: readonly Todo[];
    onDeleteAll: () => void;
    onDeleteDone: () => void;
}   

export default function TodoSummary({ todos, onDeleteAll, onDeleteDone }: TodoSummaryProps) {

    const total = todos.length;
    const done = todos.filter((todo) => todo.isDone).length;

    return (
        <div className="flex justify-between w-full font-mono text-sm px-2">
          <p className="text-gray-500">
              {done}/{total} todos done                    
          </p>
          {done > 0 && done !== total && (
                <DeleteDoneTodoButton onDeleteDone={onDeleteDone} />
            )}
            {done === total && (
                <DeleteAllButton onDeleteAll={onDeleteAll} />
            )}
        </div>
    )
}