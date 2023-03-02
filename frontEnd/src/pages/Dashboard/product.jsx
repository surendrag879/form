import React from "react";
import Navbar from "../../components/Navbar/navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Header with inline css */}
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "15px",
            border: "13px solid #b4f0b4",
            color: "rgb(11, 167, 11)",
          }}
        >
          Material UI Table
        </h1>
        {/* Table component below header */}
      </div>
    </>
  );
};

export default Product;
