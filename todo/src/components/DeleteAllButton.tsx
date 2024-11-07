interface DeleteAllButtonProps {
    onDeleteAll: () => void;
}

export default function DeleteAllButton({ onDeleteAll }: DeleteAllButtonProps) {

    return (
        <button
        onClick={onDeleteAll}
        className="text-red-400 hover:text-red-600 underline"
        >
            Delete All!
        </button>
    )
}