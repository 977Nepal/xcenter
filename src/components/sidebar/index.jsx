// import SidebarItem from "./items";
// import { items } from "../../menus";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed top-0 left-0 h-screen w-64 bg-gray-700 shadow-lg z-10 p-4 text-white">
//       <div className="flex flex-col space-y-6 w-full">
//         <img className="h-10 w-fit" src="/companyLogo.png" alt="Logo" onClick={()=>navigate("/")}/>
//         <div className="flex flex-col space-y-1">
//           {items.map((item, index) => (
//             <SidebarItem key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar



// *** USING LIBRARY *** //

import React,{ useState } from "react";
import { useDraggable } from "@dnd-kit/core";

const formElements = [
  { id: "form", name:"button", type: "text", label: "Form" },
  { id: "text", name:"username", type: "text", label: "Text Field", placeholder:"Placeholder", className: "input-field", required: false, },
  { id: "email",name:"email", type: "email", label: "Email Field", placeholder:"Placeholder", className: "input-field", required: false,},
  { id: "number",name:"phone", type: "number", label: "Number Input",placeholder:"Placeholder", className: "input-field", required: false, },
  { id: "checkbox",name:"checkbox", type: "checkbox", label: "Checkbox",className: "input-field", required: false, },
  { id: "checkbox-group",name:"gender", type: "checkbox-group", label: "Checkbox Group", options: ["Male", "Female", "Other"] , className: "input-field", required: false,},
  { id: "button", type: "button", label: "Button" },
];



const Sidebar = () => {


  return (
    
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-700 shadow-lg z-10 p-4 text-white">
    <div className="flex flex-col space-y-6 w-full">
    <a href="/">
      <img className="h-10 w-fit cursor-pointer" src="/companyLogo.png" alt="Logo" onClick={()=>navigate("/")}/>
    </a>
      <div className="flex flex-col space-y-1">
      {formElements.map((element) => (
        <DraggableItem key={element.id} element={element} />
      ))}
      </div>
    </div>
  </div>


  );
};

const DraggableItem = ({ element }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: element.id,
    data: { current: element },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-white p-2 border rounded mb-2 cursor-grab text-gray-900"
    >
      {element.label}
    </div>
  );
};




export default Sidebar