interface DeleteAllButtonProps {
    onDeleteAll: () => void;
}

export default function DeleteAllButton({ onDeleteAll }: DeleteAllButtonProps) {

    function handleDeleteAll() {
        onDeleteAll();
    }

    return <button
    onClick={handleDeleteAll}
    className="w-full rounded-md bg-gray-300 text-white p-2 hover:bg-red-500"
    >
        Delete All
    </button>
}