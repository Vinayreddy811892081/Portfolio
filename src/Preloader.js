import React from "react";

export default function Preloader({ load }) {
  return <div id={load ? "preloader" : "preloader-none"} />;
}
