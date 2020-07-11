import { GET_APPLICANTS } from "state-management/types-constants";

export const getApplicants = () => (dispatch) => {
  fetchApplicants().then((applicants) =>
    dispatch({
      type: GET_APPLICANTS,
      payload: applicants,
    })
  );
};

const fetchApplicants = () =>
  fetch("./applicants.json").then((response) => response.json());
