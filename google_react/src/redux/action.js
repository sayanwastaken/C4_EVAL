import {
  GET_DATA,
  SEARCH_DATA,
  SORT_ALPHA_ASC,
  SORT_ALPHA_DESC,
  SORT_DATE_ASC,
  SORT_DATE_DESC,
} from "./actionTypes";

export const getDataAction = (payload) => {
  return {
    type: GET_DATA,
    payload,
  };
};

export const searchDataAction = (payload) => {
  return {
    type: SEARCH_DATA,
    payload,
  };
};

export const sortAlphaAsc = () => {
  return {
    type: SORT_ALPHA_ASC,
  };
};
export const sortAlphaDesc = () => {
  return {
    type: SORT_ALPHA_DESC,
  };
};

export const sortDateAsc = () => {
  return {
    type: SORT_DATE_ASC,
  };
};

export const sortDateDesc = () => {
  return {
    type: SORT_DATE_DESC,
  };
};
