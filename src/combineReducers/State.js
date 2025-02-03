import { combineReducers } from "redux";
import {createForm,fetchAllForm } from "../components/pages/FormBuilderModule/Reducers/form-builder-reducer"
import successMessage from "../components/pages/FormBuilderModule/Reducers/success-reducer";
import {createFormData} from "../components/pages/DashboardModule/Reducers/form-data-educer";
const allReducers = combineReducers({
    formBuilder:createForm,
    fetchBuilder:fetchAllForm,
    successMessage,
    createData:createFormData
})

export default allReducers;