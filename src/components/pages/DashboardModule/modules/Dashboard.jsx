import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Trash2, X, Eye, EyeOff, Share2, Download } from "lucide-react";
import deleteForm from "../../FormBuilderModule/Actions/form-builder-delete-action";
import { getFormBuilder } from "../../FormBuilderModule/Actions/form-builder-get-action";
import { Loader } from "../../../../shared/loaders/dribLoader/Loader";
import Modal from "../../../Modal";
import createFormData from "../Actions/form-data-create-actions";

const initState =  {
  message: { type: ``, message: ``, title: `` },
  data: {
    username: "",
    email: "",
    phone: "",
    gender: "",
    checkbox: "",
  },
  error: {
    username: "",
    email: "",
    phone: "",
    gender: "",
    checkbox: "",
  },
  localvalidationerror: false,
  logo: "",
};

const Dashboard = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [share, setShare] = useState("");
  const [inputFormData, setInputFormData] = useState({});
  // const [inputFormData, setInputFormData] = useState(initState);
  const [errors, setErrors] = useState(false);


  const dispatch = useDispatch();

  const { success, error, processing,data,loading,missing } = useSelector(
    (state) => ({
      success: state?.fetchBuilder?.success,
      error: state?.fetchBuilder?.error,
      processing: state?.fetchBuilder?.processing,
      data: state?.createData?.data,
      loading: state?.createData?.loading,
      missing: state?.createData?.missing,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getFormBuilder());
  }, []);

  useEffect(() => {
    if (success) {
      setForms(success);
    }
  }, [success]);

  const handleViewForm = (formKey) => {
    const finds = forms?.filter((items) => items?.id === formKey);
    setSelectedForm(finds);
  };

  const handleDelete = async (id) => {
    const loginForms = forms?.Login || [];

    const deletedData = forms.map((form) => {
      const updatedFields = Object.fromEntries(
        Object.entries(form).filter(
          ([key, value]) => key !== "id" && value.id !== id
        )
      );
      return { ...updatedFields, id: form.id };
    });

    if (deletedData.length === 0) {
      console.warn("Item not found!");
      return;
    }
    dispatch(deleteForm(deletedData[0]));
  };

  const handleExport = () => {
    const jsonBlob = new Blob([JSON.stringify(formData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(jsonBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "form.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleShare = async (id) => {
    setModalOpen(true);
    // const shareableLink = `${window.location.origin}/forms/${result.id}`; //front-end url
    const shareableLink = `http://localhost:5000/Login`;
    navigator.clipboard.writeText(shareableLink);
    setShare(shareableLink);
  };

  useEffect(() => {
    const fetchForm = async () => {
      const response = await fetch(`http://localhost:5000/Login`);
      const data = await response.json();
      setFormData(data);
    };

    fetchForm();
  }, []);



  const handleChange = (e) => {
    console.log("e ",e.target.value)
    const { name, value, type, checked } = e.target;
    if(value && errors){
      setErrors(false)
    }
    setInputFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const validationRule = {
    username: ["required"],
    phone: ["required", "min:10", "max:10", "numeric"],
    email: ["required"],
    gender: ["required"],
    checkbox: ["required"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(inputFormData)?.length === 0){
      setErrors("Required")
    }else{
      dispatch(createFormData(inputFormData))
    }


  };


  return (
    <>
    {
      processing ?
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
      :
      <div className="p-4">
        <h2 className="text-xl font-bold">Form Detail</h2>
        {/* Form List */}
        <ul className="mt-4">
          {forms.map((item, idx) => (
            <li key={idx} className="flex justify-between mb-2 border p-2">
              <span className="font-semibold">{idx + 1}</span>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    selectedForm
                      ? setSelectedForm(null)
                      : handleViewForm(item?.id)
                  }
                  className="ml-2  text-white px-2  rounded items-center"
                >
                  {selectedForm ? (
                    <Eye size={22} className="text-gray-800" />
                  ) : (
                    <EyeOff size={22} className="text-gray-800" />
                  )}
                </button>
                <Download
                  size={22}
                  className="text-gray-800 cursor-pointer"
                  onClick={handleExport}
                />
                <Share2
                  size={22}
                  className="text-gray-800 cursor-pointer"
                  onClick={handleShare}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Show Selected Form */}
        {selectedForm && (
          <div className="mt-4 border p-4 bg-gray-100">
            <div className="flex justify-between mb-8">
              <h3 className="text-lg font-bold">Form Details</h3>
              <X
                size={22}
                className="cursor-pointer"
                onClick={() => setSelectedForm(null)}
              />
            </div>
            {selectedForm.map((field, idx) => {
              return Object?.values(field)
                ?.filter((item) => item?.current)
                ?.map((current, index) => {
                  return (
                    <div key={index} className="mb-2">
                      <div className="flex justify-between items-center">
                        <label className="block font-semibold">
                          {current.current.label}
                        </label>
                        <Trash2
                          size={20}
                          className="text-red-600 cursor-pointer"
                          onClick={() => handleDelete(current?.id)}
                        />
                      </div>
                      {current.current.type === "checkbox" ? (
                        <input
                          type="checkbox"
                          className={current.current.className}
                          checked={current.current.required}
                          name={current.current.name}
                          value={inputFormData[current?.current.name] || ""}
                          onChange={handleChange}
                        />
                      ) : current?.current?.type === "button" ? (
                        <input
                          type={current?.current?.type}
                          value={current?.current?.label}
                          className={`border cursor-pointer bg-slate-900 text-white px-4 p-1 rounded-md mt-1`}
                          name={current.current.name}
                          // value={formData[field.name] || ""}
                          onClick={handleSubmit}
                          data-testid="button"
                        />
                      ) : (<>
                        <input
                          type={current.current.type}
                          className={`border p-1 w-full ${current.current.className}`}
                          placeholder={current.current.placeholder}
                          name={current.current.name}
                          value={inputFormData[current?.current.name] || ""}
                          onChange={(e)=>handleChange(e)}
                        />                        
                          {errors && <span className=" text-red-600">{errors}</span>}
                      </>)}

                    </div>
                  );
                });
            })}
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Share the form"
        >
          <p>link: {share}</p>
        </Modal>
      </div>
      }
    </>
  );
};

export default Dashboard;
