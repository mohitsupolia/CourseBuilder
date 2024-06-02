import { FiMoreVertical } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { useRef, useEffect } from "react";

function LinkItem({
  link,
  onEdit,
  onDelete,
  onToggleMenu,
  menuOpen,
  onDragStart,
}) {
  const menuRef = useRef();

  return (
    <div
      className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto"
      draggable
      onDragStart={(e) => onDragStart(e, link)}
    >
      <div className="flex items-center">
        <img
          src="/images/chain_icon.png"
          alt="Chain Icon"
          className="w-7 h-7"
        />
        <div className="ml-2">
          <span className="text-xl font-bold text-gray-700">
            {link.displayName}
          </span>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-medium text-gray-500 hover:underline"
          >
            Link
          </a>
        </div>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          onClick={() => onToggleMenu(link.id, "link")}
          className="text-gray-600 hover:text-gray-900"
        >
          <FiMoreVertical className="h-5 w-5" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
            <a
              href="#"
              onClick={() => onEdit(link)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
            >
              <CiEdit className="mr-2" />
              <span>Edit link</span>
            </a>
            <a
              href="#"
              onClick={() => onDelete(link.id)}
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

export default LinkItem;





