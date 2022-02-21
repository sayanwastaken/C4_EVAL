import { useState } from "react";

export const Home = () => {
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
            padding:"5px",
          }}
          type="text"
          placeholder="search Google..."
          className="search-box"
        />
      </div>
    </div>
  );
};
