export default function successMessage
    (state = { message:"" }, action) {

    switch (action.type)
    {
        case 'ADD_SUCCESS_MESSAGE':
            return {...state, ...{message: action }};

        case 'DELETE_SUCCESS_MESSAGE':
            return {...state, ...{ message: "" }};

        default: return state;
    }
}