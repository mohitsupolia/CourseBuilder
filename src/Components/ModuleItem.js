import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function ModuleItem({ module, onEdit, onDelete, onToggleMenu, menuOpen }) {
  const itemCount = module.files.length + module.links.length;

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto">
      <div className="flex items-center space-x-4">
        <img src="/images/drop_down.png" alt="PDF Icon" className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="text-lg font-medium">{module.name}</span>
          {itemCount === 0 ? (
            <p className="text-sm">Add items to this module</p>
          ) : (
            <p className="text-sm">{itemCount} items</p>
          )}
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => onToggleMenu(module.id, "module")}
          className="text-gray-600 hover:text-gray-900"
        >
          <FiMoreVertical className="h-5 w-5" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
            <a
              href="#"
              onClick={() => onEdit(module)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
            >
              <CiEdit className="mr-2" />
              <span>Edit module name</span>
            </a>
            <a
              href="#"
              onClick={() => onDelete(module.id)}
              className="block px-4 py-2 text-gray-800 hover:bg-red-100 text-red-500"
            >
              <img
                src="/images/icons8-trash.svg"
                alt="Trash Icon"
                width="20"
                height="20"
                className="inline-block mr-2"
              />
              <span>Delete</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModuleItem;

