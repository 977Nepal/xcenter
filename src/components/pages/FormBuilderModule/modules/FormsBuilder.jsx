import React, { useEffect, useState } from 'react'
import { DndContext, useDroppable } from "@dnd-kit/core";
import FieldEditor from './EditFields';
import { useDispatch,useSelector,shallowEqual } from 'react-redux';
import { createForm } from "../Actions/form-builder-create-action"
import { useNavigate } from 'react-router-dom';
const FormBuilder = ({formFields }) => {

  const { setNodeRef } = useDroppable({ id: "form-canvas" });
  const [selectedField, setSelectedField] = useState(null);
  const [fields, setFields] = useState([]);
  const [formFieldsDND, setFormFieldsDND] = useState([...formFields]);  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success,error,processing} = useSelector((state)=>({
    success: state.formBuilder.success,
    error: state.formBuilder.error,
    processing: state.formBuilder.processing,
  }),shallowEqual())

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over?.id === "form-canvas") {
      const draggedField = availableFormFields.find(
        (field) => field.id === active.id
      );

      if (draggedField) {
        setFormFieldsDND((prevFields) => [
          ...prevFields,
          { ...draggedField, id: Date.now() },  // Add a new field with a unique ID
        ]);
      }
    }
  };

  useEffect(()=>{
    if(success){
     navigate("/dashboard")
    }
  },[success])

  useEffect(()=>{
    if(formFields){
      setFormFieldsDND(formFields)
    }
  },[formFields])

  const handleSave = ()=>{
    const formJSON = JSON.stringify(formFieldsDND);
    dispatch(createForm(formJSON))
  }


  const handleDelete = (id) => {
    setFields(fields.filter((field) => field.id !== id));
    setSelectedField(null);
  };

  const handleEdit = (id) => {
    setFields(fields.filter((field) => field.id !== id));
    setSelectedField(fields.filter((field) => field.id !== id));
  };

  // Close the editor
  const closeEditor = () => {
    setSelectedField(null);
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
    <div ref={setNodeRef} className="flex-1 p-4 min-h-screen bg-gray-100">
      <h2 className="text-lg font-bold mb-2">Form Preview</h2>
      {formFields.length === 0 && <p className="text-gray-500">Drag fields here...</p>}

      {formFields.map((field) => (
        <div key={field.id} className="p-2 border rounded mb-2 bg-white">
          { field?.current?.type  !== "button" && <label>{field?.current.label}</label>}
          {field?.current?.type === "checkbox-group" ? (
            <div className="flex gap-2 items-center space-x-2">
            {

              field?.current.options.map((option, index) => (
                <div className='flex gap-2' key={index}>
                  <input type="checkbox" id={option} />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))
            }
            </div>
            



    ): field?.current?.type=== "button" ?
      (
        <input type={field?.current?.type}
         value={field?.current?.label} 
         className={`border cursor-pointer bg-slate-900 text-white px-4 p-1 rounded-md mt-1`}
        onClick={()=>handleSave()}/>
      )
    :
      (
        <input type={field?.current?.type} className={`border p-1 w-full mt-1`} />
      )
     }

         
          <div className='flex gap-2 items-center'>
            <button className="text-red-500 mt-1" onClick={() => handleDelete(field?.current?.id)}>Delete</button>
            <button className="text-green-500 mt-1" onClick={() => setSelectedField(field)}>Edit</button>
          </div>
        </div>
      ))}
        {selectedField && <FieldEditor field={selectedField} setFields={setFields}  onClose={closeEditor} onEdit={handleEdit}  />}
    </div>

    </DndContext>

)

}

export default FormBuilder