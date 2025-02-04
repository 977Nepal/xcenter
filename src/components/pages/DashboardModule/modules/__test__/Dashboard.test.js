import axios from "axios";
import {
 userData
} from "../__mock_store__/userData";
describe("Update Source Tiers Test cases", () => {
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
      "http://localhost:5000/data",
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
     "http://localhost:5000/data",
      _postBody
    );

    // Assert that the response is correct
    expect(response).toEqual(_mockResult);
  });

  it("Check status code of 401 if token is unavailable or invalid", async () => {
    const _mockResult = {
      status: 401,
      data: { message: "invalid token" },
    };
    axios.post = jest.fn().mockReturnValue(_mockResult);

    const response = await axios.post("http://localhost:5000/data",);

    // Assert that the response is correct
    expect(response.data).toEqual({ message: "invalid token" });
    expect(response.status).toEqual(401);
  });

  it("Check status code of 404 if api url is not correct", async () => {
    const _mockResult = {
      status: 404,
      data: { message: "No Record Found" },
    };
    axios.post = jest.fn().mockReturnValue(_mockResult);

    const response = await axios.post(
      "http://localhost:5000/data",
      userData
    );

    // Assert that the response is correct
    expect(response.data).toEqual({ message: "No Record Found" });
    expect(response.status).toEqual(404);
  });

  it("Check status code of 403 if access is unauthorized", async () => {
    const _mockResult = {
      status: 403,
      data: { message: "unauthorized" },
    };
    axios.post = jest.fn().mockReturnValue(_mockResult);

    const response = await axios.post(
     "http://localhost:5000/data",
      userData
    );

    // Assert that the response is correct
    expect(response.data).toEqual({ message: "unauthorized" });
    expect(response.status).toEqual(403);
  });

  it("Test cases for 500 error", async () => {
    const _mockResult = {
      status: 500,
    };
    const _postBody = userData;

    axios.post = jest.fn().mockReturnValue(_mockResult);

    const response = await axios.post(
      "http://localhost:5000/data",
      _postBody
    );

    // Assert that the response is correct
    expect(response).toEqual(_mockResult);
  });
});
