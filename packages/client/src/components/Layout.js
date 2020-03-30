import React from "react";

const style = {
  textAlign: "center",
  display: "block"
};

export default function Layout({ children }) {
  return <div style={style}>{children}</div>;
}
