import React, { useState } from "react";

const FieldEditor = ({ field, setFields, onClose, onEdit }) => {
  const [editedField, setEditedField] = useState({ ...field, current: { ...field.current } });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEditedField((prev) => ({
      ...prev,
      current: {
        ...prev.current,
        [name]: type === "checkbox" ? checked : value, // Ensure checkbox updates correctly
      },
    }));
  };

  // Save changes & update the fields list
  const handleSave = () => {
    console.log("Edited Field:", editedField);

    setFields((prevFields) =>
      prevFields.map((f) => (f.id === editedField.id ? editedField : f))
    );

    if (onEdit) {
      onEdit(editedField); // Call onEdit if provided
    }

    onClose(); // Close the editor
  };

  return (
    <div className="w-80 p-4 border-l bg-white">
      <h3 className="text-lg font-bold">Edit Field</h3>

      <label className="block mt-2">Label:</label>
      <input
        type="text"
        name="label"
        value={editedField.current.label} // Access inside `current`
        onChange={handleChange}
        className="border p-1 w-full"
        placeholder={editedField.current.placeholder}
      />

      <label className="block mt-2">Type:</label>
      <select
        name="type"
        value={editedField.current.type} // Access inside `current`
        onChange={handleChange}
        className="border p-1 w-full"
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
        <option value="checkbox">Checkbox</option>
        <option value="button">Button</option>
      </select>

      <label className="block mt-2">Class Name:</label>
      <input
        type="text"
        name="className"
        value={editedField.current.className || ""}
        onChange={handleChange}
        className="border p-1 w-full"
      />

      <label className="block mt-2">Required:</label>
      <input
        type="checkbox"
        name="required"
        checked={editedField.current.required || false}
        onChange={handleChange}
        className="mr-2"
      />
      Required

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
          Save
        </button>
        <button onClick={onClose} className="bg-gray-300 p-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default FieldEditor;
