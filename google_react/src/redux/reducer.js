import {
  GET_DATA,
  SEARCH_DATA,
  SORT_ALPHA_ASC,
  SORT_ALPHA_DESC,
  SORT_DATE_ASC,
  SORT_DATE_DESC,
} from "./actionTypes";

const init = {
  data: [],
  searchData: [],
  filterData: [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_DATA:
        return { ...store, data: payload };
        case SEARCH_DATA:
              console.log(payload);
            let search = store.data.filter((ele) => ele.title == payload);
      return { ...store, searchData: search };
    default:
      return { ...store };
  }
};
