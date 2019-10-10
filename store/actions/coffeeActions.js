import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;
      dispatch({ type: GET_COFFEESHOPS, payload: shops });
    } catch (err) {
      console.error("Can't fetch shops!", err);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  dispatch({ type: COFFEESHOPS_LOADING });
};
