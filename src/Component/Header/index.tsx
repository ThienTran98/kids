import React from "react";
import TopNav from "./TopNav";
import Nav from "./Nav";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <TopNav />
      <Nav />
    </div>
  );
}
