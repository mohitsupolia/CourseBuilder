import React, { useState, useEffect } from "react";

function EditModuleModal({ isOpen, onClose, editModule, moduleToEdit }) {
  const [newName, setNewName] = useState(moduleToEdit ? moduleToEdit.name : "");

  useEffect(() => {
    if (moduleToEdit) {
      setNewName(moduleToEdit.name);
    }
  }, [moduleToEdit]);

  const handleEdit = () => {
    editModule(moduleToEdit.id, newName);
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white text-gray-700 py-1 px-2  hover:bg-gray-300"
        >
          X
        </button>

        <h2 className="text-xl font-bold mb-4">Edit module</h2>
        <p className="mb-4 text-gray-700">Module name</p>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="File name"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleEdit}
            className="bg-teal-500 text-white py-2 px-4 rounded"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default EditModuleModal;


