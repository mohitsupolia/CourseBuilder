
import React, { useState, useEffect } from "react";

const AddLinkModal = ({ isOpen, onClose, addLink, editLinkData }) => {
  const [url, setUrl] = useState("");
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (editLinkData) {
      setUrl(editLinkData.url);
      setDisplayName(editLinkData.displayName);
    } else {
      setUrl("");
      setDisplayName("");
    }
  }, [editLinkData]);

  const handleAddLink = () => {
    addLink({ url, displayName });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="relative bg-white p-6 rounded shadow-lg w-full max-w-md mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">
          {editLinkData ? "Edit Link" : "Add new link"}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Display name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddLink}
            className="bg-teal-500 text-white px-4 py-2 rounded"
          >
            {editLinkData ? "Save Changes" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLinkModal;
