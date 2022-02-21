import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getDataAction, searchDataAction } from "../redux/action";

export const Navbar = () => {
  const { searchData, filterData } = useSelector((store) => store);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(searchDataAction(text));
    let params = { search: text };
    setSearchParams(params);
  };

  return (
    <>
      <div
        id="navbar"
        style={{
          width: "1000px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="search.."
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          style={{
            width: "70%",
            height: "35px",
            margin: "5px",
            padding: "5px",
            borderRadius: "5px",
            border: "3px solid skyblue",
          }}
        />
        <button
          className="search"
          onClick={() => {
            handleSearch();
          }}
          style={{
            width: "10%",
            height: "52px",
            margin: "5px",
            padding: "5px",
            borderRadius: "5px",
            border: "3px solid skyblue",
            ouline:"0",
            backgroundColor: "#4789F4",
            color: "white",
          }}
        >
          Search
        </button>
      </div>
      <hr />

      <h1>Search Details</h1>
      <div id="detailed-result" >
        <div className="title">
          <h3>Title: {searchData[0].title}</h3>
        </div>
        <div className="desc">
          <b>Author:</b>
          {searchData[0].author}
        </div>
        <div className="author">
          <p>
            <b>Description: </b> {searchData[0].description}
          </p>
        </div>
        <div className="creation-date">
          <p>
            <b>Creation_date-{searchData[0].creation_date}</b>
          </p>
        </div>
        <div className="explicit">
          <p>
            <b>Explicit:</b> {searchData[0].explicit ? "True" : "False"}
          </p>
        </div>
        <div className="quality">
          <p>Quality:{searchData[0].quality}</p>
        </div>
      </div>
    </>
  );
};
