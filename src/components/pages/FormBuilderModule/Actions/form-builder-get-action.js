import axios from "axios";
import { formBuilderConstants } from "../Constants/form-builder-constants";
import { Config } from "../../../../helpers/auth/Config";
import { addSuccessMessage } from "./success-message-action";

function _success(success) {
  return {
    type: `${formBuilderConstants.FETCHET_FORM_BUILDER_SUCCESS}`,
    payload: success?.data,
  };
}

function _error(error) {
  return { type: `${formBuilderConstants.FETCH_FORM_BUILDER_ERROR}`, error };
}

function _processing(processing) {
  return {
    type: `${formBuilderConstants.FETCH_FORM_BUILDER_PROCESSING}`,
    processing,
  };
}

export const getFormBuilder = () => async (dispatch) => {
  const uri = Config.BaseUrl;
  let config = {
    url: `${uri}/Login`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: formBuilderConstants.FETCH_FORM_BUILDER_PROCESSING });
  dispatch(_processing(true));

  let request = axios(config)
    .then((res) => {
      dispatch(_processing(false));
      dispatch(_success(res));
      dispatch({
        type: formBuilderConstants.FETCHET_FORM_BUILDER_SUCCESS,
        payload: res.data,
      });
      return res;
    })
    .catch((error) => {
      dispatch(_processing(false));
      dispatch(_error(error));
      dispatch(
        addSuccessMessage({
          message: "Error While Fetching Class",
          variant: "error",
        })
      );
      return error.response;
    });
  return request;
};

export default getFormBuilder;
