function ShowTodos({ checked, task, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg border-b">

      <div className="flex items-center gap-3">
        <input type="checkbox" checked={checked} onChange={onToggle} className="w-5 h-5" />
        <p className={`${checked ? "line-through text-gray-400" : "text-black"} text-lg font-medium`}>
          {task}
        </p>
      </div>

      <div className="flex gap-3">
        <button onClick={onEdit} className="text-blue-600 text-xl cursor-pointer">✏️</button>
        <button onClick={onDelete} className="text-red-600 text-xl cursor-pointer">🗑️</button>
      </div>
      
    </div>
  );
}

export default ShowTodos;
