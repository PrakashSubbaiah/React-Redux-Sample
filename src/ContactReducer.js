let initialState = {
  name: "PRAKASH",
  age: "25",
};

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
      };
    case "REMOVE":
      return {
        ...initialState,
      };
    default:
      return {
        ...initialState,
      };
  }
};

export default ContactReducer;
