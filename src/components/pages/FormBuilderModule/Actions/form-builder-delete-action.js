import axios from "axios";
import { formBuilderConstants } from "../Constants/form-builder-constants";
import { Config } from "../../../../helpers/auth/Config";
import { addSuccessMessage } from "./success-message-action";
import getFormBuilder from "./form-builder-get-action";

function _success(success) {
  return {
    type: `${formBuilderConstants.DELETE_FORM_BUILDER_SUCCESS}`,
    success,
  };
}

function _error(error) {
  return { type: `${formBuilderConstants.DELETE_FORM_BUILDER_ERROR}`, error };
}

function _processing(processing) {
  return {
    type: `${formBuilderConstants.DELETE_FORM_BUILDER_PROCESSING}`,
    processing,
  };
}

async function deleteAllLoginEntries() {
  const uri = Config.BaseUrl;

  try {
    const response = await axios.get(`${uri}/Login`);
    const data = response.data;
    for (const item of data) {
      await axios.delete(`${uri}/Login/${item.id}`);
    }
  } catch (err) {
    console.error("Error deleting Login entries:", err);
  }
}

export function deleteForm(data) {
  const uri = Config.BaseUrl;
  deleteAllLoginEntries();
  return (dispatch) => {
    dispatch(_processing(true));
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
            message: "Form of Field Deleted Successfully",
            variant: "success",
          })
        );
        dispatch(getFormBuilder());
      })
      .catch((error) => {
        dispatch(_error(error));
        dispatch(_processing(false));
        dispatch(
          addSuccessMessage({
            message: "Error While Deleting Form Field",
            variant: "error",
          })
        );
      });
    return request;
  };
}

export default deleteForm;
