import {  formDataConstants } from "../Constants/form-data-constants";

export function createFormData
    (state = {missing: null, data: null, loading: false}, action) {

    switch (action.type) {
        case `${formDataConstants.CREATE_FORM_DATA_SUCCESS}`:
            return {...state, ...{data: action.success, missing: null}};

        case `${formDataConstants.CREATE_FORM_DATA_ERROR}`:
            return {...state, ...{data: null, missing: action.error}};

        case `${formDataConstants.CREATE_FORM_DATA_PROCESSING}`:
            if (action.processing)
                return {...state, ...{loading: action.processing, data: null, missing: null}}
            else
                return {...state, ...{loading: action.processing}};

        default:
            return state;
    }
}
