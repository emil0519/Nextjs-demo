import type { NextPage } from "next";
import Head from "next/head";
import CatList from "../component/CatList";
import { server } from "../config/index";

const Home: NextPage = ({ cats, localCats }: any) => {
  //

  return (
    <section className="bg-black w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <Head>
        <title>Testing</title>
        <meta name="keywords" content="hello,world"></meta>
      </Head>
      <div className=" bg-black text-white text-[32px] font-semibold">
        Welcome to next js
      </div>
      <div className="flex w-[80%] justify-center items-center flex-col">
        <div className="flex">
          {" "}
          <CatList cats={cats}></CatList>
        </div>
        {/* <div> {JJResult.name}</div> */}
        <div className="flex">
          <CatList cats={localCats}></CatList>
        </div>
      </div>
    </section>
  );
};
export const getStaticProps = async () => {
  // it works but why?
  // fetch at build time, ensure component is pre-render

  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
  const cats = await res.json();

  // const newRes = await fetch("https://cataas.com/cat/cute");
  // const newCats = await newRes.json();

  // const JJ = await fetch("https://nexthosting.vercel.app/api/hello");
  // const JJResult = await JJ.json();
  const localData = await fetch(`${server}/api`);
  const localCats = await localData.json();

  return {
    props: {
      cats,
      // JJResult,
      localCats,
    },
  };
};

export default Home;
