import React from "react";

export default function Error({ error }) {
  return (
    <div>
      <div style={{ height: "max-content", background: "red" }}>{error}</div>
    </div>
  );
}
