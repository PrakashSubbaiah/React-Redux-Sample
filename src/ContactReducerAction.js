export const contactAdd = () => (dispatch) => {
  return dispatch({
    type: "ADD",
    payload: {
      name: "Shiva",
      age: 23,
    },
  });
};
export const conactRemove = () => (dispatch) => {
  return dispatch({
    type: "REMOVE",
  });
};
