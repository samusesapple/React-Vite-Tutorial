interface DeleteDoneTodoButtonProps {   
    onDeleteDone: () => void;
}

export default function DeleteDoneTodoButton({ onDeleteDone }: DeleteDoneTodoButtonProps) {
    return (
        <button
        onClick={onDeleteDone}
        className="text-red-400 hover:text-red-600"
        >
        Delete Done
        </button>
    )
}