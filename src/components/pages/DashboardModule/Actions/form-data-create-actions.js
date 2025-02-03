import axios from "axios";
import { formDataConstants } from "../Constants/form-data-constants";
import { Config } from "../../../../helpers/auth/Config";

import { addSuccessMessage } from "../../FormBuilderModule/Actions/success-message-action";

function _success(success) {
  return { type: `${formDataConstants.CREATE_FORM_DATA_SUCCESS}`, success };
}

function _error(error) {
  return { type: `${formDataConstants.CREATE_FORM_DATA_ERROR}`, error };
}

function _processing(processing) {
  return {
    type: `${formDataConstants.CREATE_FORM_DATA_PROCESSING}`,
    processing,
  };
}

export function createFormData(data) {
  return (dispatch) => {
    dispatch(_processing(true));

    const uri = Config.BaseUrl;
    let config = {
      url: `${uri}/data`,
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
            message: "Data Added Successfully",
            variant: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(_error(error));
        dispatch(_processing(false));
        dispatch(
          addSuccessMessage({
            message: "Error while adding data",
            variant: "error",
          })
        );
      });
    return request;
  };
}

export default createFormData;
