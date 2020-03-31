import React from "react";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  );
}
