interface DeleteDoneTodoButtonProps {   
    onDeleteDone: () => void;
}

export default function DeleteDoneTodoButton({ onDeleteDone }: DeleteDoneTodoButtonProps) {
    return <button
    onClick={onDeleteDone}
    className="w-full rounded-md bg-gray-300 text-white p-2 hover:bg-green-600"
    >
        Delete Done
        </button>
}