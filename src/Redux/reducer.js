let Auth = { isAuth: false };

function myReducer(state = Auth, action) {
  switch (action.type) {
    case "AUTH": {
      return { ...state, isAuth: action.payload };
    }
    default:
      return state;
  }
}

export default myReducer;
