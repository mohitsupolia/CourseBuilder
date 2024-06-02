import React, { useState, useEffect } from "react";

function AddModule({ isOpen, onClose, addModule, editModule, moduleToEdit }) {
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    if (moduleToEdit) {
      setModuleName(moduleToEdit.name);
    }
  }, [moduleToEdit]);

  const handleAction = () => {
    if (moduleName.trim()) {
      if (editModule) {
        editModule(moduleToEdit.id, moduleName);
      } else {
        addModule(moduleName);
      }
      setModuleName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white rounded-lg w-11/12 max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {editModule ? "Edit Module" : "Create New Module"}
        </h2>
        <label className="block text-gray-700 mb-2">
          Module Name
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
        </label>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-teal-500 text-white py-2 px-4 rounded"
            onClick={handleAction}
          >
            {editModule ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModule;

