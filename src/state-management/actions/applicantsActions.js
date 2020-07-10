import { GET_STUDENTS } from "state-management/constants";

export const getStudents = () => (dispatch) => {
  fetchStudents().then((students) =>
    dispatch({
      type: GET_STUDENTS,
      payload: students,
    })
  );
};

const fetchStudents = () =>
  fetch("./students.json").then((response) => response.json());
