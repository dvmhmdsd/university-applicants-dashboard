import { GET_APPLICANTS } from "state-management/types-constants";

export const getApplicants = () => (dispatch) => {
  fetchApplicants().then((applicants) =>
    dispatch({
      type: GET_APPLICANTS,
      payload: applicants,
    })
  );
};

/**
 * Just return the data parsed then dispatch the action in the action creator above.
 * The data are stored in a json file in the public folder to simulate asynchronous requests.
 */
const fetchApplicants = () =>
  fetch("./applicants.json").then((response) => response.json());
