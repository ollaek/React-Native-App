import createDataContext from "./createDataContext";
import TokenApi from "../api/HR";
import { AsyncStorage } from "react-native";
import { navigate } from "../helpers/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const SignIn = dispatch => async ({ email, password }) => {
  try {
    const response = await TokenApi.post("/token", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });
    navigate("AppFlow");
  } catch (err) {
    dispatch({ type: "add_error", payload: "Something Wrong Happened !!!" });
    navigate("AppFlow");
  }
};

const TryLocalSignIn = dispatch => async () =>{
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: "signin", payload: token });
        navigate("AppFlow");
    }else{
        navigate("SignIn");
    }
};

const SignOut = dispatch => () => {};

const ClearErrorMessage = dispatch => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { SignIn, SignOut, ClearErrorMessage, TryLocalSignIn },
  { token: null, errorMessage: "" }
);
