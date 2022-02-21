import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getDataAction, searchDataAction } from "../redux/action";
import { useSearchParams,useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  const { data } = useSelector((store) => store);
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");

  useEffect(() => {
    getresults();
  }, []);
  const getresults = () => {
    axios
      .get("https://fast-reef-22226.herokuapp.com/data")
      .then((res) => dispatch(getDataAction(res.data)));
  };
  const handleSearch = () => {
    dispatch(searchDataAction(text))
    let params={search:text}
    setSearchParams(params);
    navigate(`/search/${params.search}`)
  };

  return (
    <div
      style={{
        width: "1200px",
        height: "600px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "40%",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          alt=""
        />
      </div>
      <div>
        <input
          style={{
            width: "800px",
            height: "45px",
            border: "1px solid black",
            borderRadius: "25px",
            padding: "5px",
          }}
          type="text"
          placeholder="search Google..."
          className="search-box"
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyPress={(e) => {
            if(e.key==="Enter"){
              handleSearch();
            }
          }}
        />
      </div>
    </div>
  );
};
