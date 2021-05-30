import React from "react";

export default function Success({ success }) {
  return (
    <div>
      <div style={{ height: "max-content", background: "green" }}>
        {success}
      </div>
    </div>
  );
}
