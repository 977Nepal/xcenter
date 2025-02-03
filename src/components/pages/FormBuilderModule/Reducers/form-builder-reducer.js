import { formBuilderConstants } from "../Constants/form-builder-constants";

export function createForm
    (state = {error: null, success: null, processing: false}, action) {

    switch (action.type) {
        case `${formBuilderConstants.ADD_FORM_BUILDER_SUCCESS}`:
            return {...state, ...{success: action.success, error: null}};

        case `${formBuilderConstants.ADD_FORM_BUILDER_ERROR}`:
            return {...state, ...{success: null, error: action.error}};

        case `${formBuilderConstants.ADD_FORM_BUILDER_PROCESSING}`:
            if (action.processing)
                return {...state, ...{processing: action.processing, success: null, error: null}}
            else
                return {...state, ...{processing: action.processing}};

        default:
            return state;
    }
}



 export function fetchAllForm
    (state = {error: null, success: [], processing: false}, action) {
    switch (action.type) {
        case `${formBuilderConstants.FETCHET_FORM_BUILDER_SUCCESS}`:
            return {...state, ...{success: action.payload, error: null}};

        case `${formBuilderConstants.FETCH_FORM_BUILDER_ERROR}`:
            return {...state, ...{success: [], error: action.payload}};

        case `${formBuilderConstants.FETCH_FORM_BUILDER_PROCESSING}`:
            if (action.processing)
                return {...state, ...{processing: action.processing, success: [], error: null}}
            else
                return {...state, ...{processing: action.processing}};

        default:
            return state;
    }
}




