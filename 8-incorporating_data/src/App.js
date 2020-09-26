import React from "react";
import GitHubUser from "./components/GitHubUser";
import GitHubUserTwo from "./components/GitHubUserTwo";


export default function App() {
  return (
    <>
      <GitHubUserTwo login="simonduquaine" />
      <GitHubUserTwo login="delvaux1986" />
      <GitHubUserTwo login="M-Shmayssany" />
      <GitHubUserTwo login="DewerseB" />
      <GitHubUserTwo login="nicode-io" />
    </>
  );
}

