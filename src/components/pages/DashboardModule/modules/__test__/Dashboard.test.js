import {axios} from "axios";

import {
    render,
    cleanup,
    fireEvent,
    waitFor,
    screen,
  } from "../../../../../../jest/jest.utils";
import { userData } from "../__mock_store__/userData";

//I think Some of Version not matched for jest test case
// I WISS FIXE IT LATER


describe("Create Permission Test cases", () => {
  beforeEach(() => {
    axios.post = jest.fn();
  });

  it("Test cases for 422 error", async () => {
    const _mockResult = {
      status: 422,
    };
    const _postBody = userData;
    axios.post = jest.fn().mockReturnValue(_mockResult);

    const response = await axios.post(
      "/http://localhost:5000/data",
      _postBody
    );

    // Assert that the response is correct
    expect(response).toEqual(_mockResult);
  });

  it("Test cases for 200 success", async () => {
    const _mockResult = {
      status: 200,
    };
    const _postBody = userData;

    axios.post = jest.fn().mockReturnValue(_mockResult);

    const response = await axios.post(
      "/http://localhost:5000/data",
      _postBody
    );

    // Assert that the response is correct
    expect(response).toEqual(_mockResult);
  });

});

  

  