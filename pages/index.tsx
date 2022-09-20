import type { NextPage } from "next";
import dynamic from "next/dynamic";

const TuiEditor = dynamic(() => import("../components/TuiEditor"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <TuiEditor initialValue="Hello World!" onChange={(e) => console.log(e)} />
  );
};

export default Home;
