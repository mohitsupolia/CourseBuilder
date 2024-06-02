import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { RiDownloadLine } from "react-icons/ri";
import { BsFillFilePdfFill } from "react-icons/bs";

function PdfItem({
  pdf,
  onRename,
  onDelete,
  onToggleMenu,
  menuOpen,
  onDragStart,
}) {
  return (
    <div
      className="flex items-center justify-between bg-gray-50 rounded-md p-4 mb-4 shadow-sm mx-auto"
      draggable
      onDragStart={(e) => onDragStart(e, pdf)}
    >
      <div className="flex items-center space-x-4">
        <img src="/images/pdf_icon.png" alt="PDF Icon" className="w-6 h-6" />
        <div className="flex flex-col">
          <span className="text-lg font-medium">{pdf.name}</span>
          <p className="text-sm">PDF</p>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => onToggleMenu(pdf.id, "pdf")}
          className="text-gray-600 hover:text-gray-900"
        >
          <FiMoreVertical className="h-5 w-5" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
            <a
              href="#"
              onClick={() => onRename(pdf)}
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              <CiEdit className="mr-2" />
              <span>Rename</span>
            </a>
            <a
              href={pdf.url}
              download={pdf.name}
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              <RiDownloadLine className="mr-2" />
              <span>Download</span>
            </a>
            <a
              href="#"
              onClick={() => onDelete(pdf.id)}
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

export default PdfItem;

