import { combineReducers } from "redux";
import coffeeReducer from "./coffeeReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  coffeeReducer: coffeeReducer
});

export default rootReducer;
