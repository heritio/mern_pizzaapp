import React from "react";

export default function Loading() {
  return (
    <div>
      <div
        className="spinner-border text-success"
        role="status"
        style={{ height: "80px", width: "80px", marginTop: "120px" }}
      ></div>
    </div>
  );
}
