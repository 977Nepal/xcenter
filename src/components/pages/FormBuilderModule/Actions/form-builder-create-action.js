import axios from "axios";
import { formBuilderConstants } from "../Constants/form-builder-constants";
import { Config } from "../../../../helpers/auth/Config";

import { addSuccessMessage } from "./success-message-action";

function _success(success) {
  return { type: `${formBuilderConstants.ADD_FORM_BUILDER_SUCCESS}`, success };
}

function _error(error) {
  return { type: `${formBuilderConstants.ADD_FORM_BUILDER_ERROR}`, error };
}

function _processing(processing) {
  return {
    type: `${formBuilderConstants.ADD_FORM_BUILDER_PROCESSING}`,
    processing,
  };
}

export function createForm(data) {
  return (dispatch) => {
    dispatch(_processing(true));

    const uri = Config.BaseUrl;
    let config = {
      url: `${uri}/Login`,
      method: "post",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    };
    let request = axios(config)
      .then((res) => {
        dispatch(_processing(false));
        dispatch(_success(res));
        dispatch(
          addSuccessMessage({
            message: "Form Created Successfully",
            variant: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(_error(error));
        dispatch(_processing(false));
        dispatch(
          addSuccessMessage({
            message: "Error While Creating Form",
            variant: "error",
          })
        );
      });
    return request;
  };
}

export default createForm;
