import type { NextPage } from "next";
import Head from "next/head";
import CatList from "../component/CatList";

const Home: NextPage = ({ cats }: any) => {
  console.log(cats);

  return (
    <section className="bg-black w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <Head>
        <title>Testing</title>
        <meta name="keywords" content="hello,world"></meta>
      </Head>
      <div className=" bg-black text-white text-[32px] font-semibold">
        Welcome to next js
      </div>
      <div className="flex">
        <CatList cats={cats}></CatList>
      </div>
    </section>
  );
};
export const getStaticProps = async () => {
  // it works but why?
  // fetch at build time

  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
  const cats = await res.json();
  return {
    props: {
      cats,
    },
  };
};
export default Home;
