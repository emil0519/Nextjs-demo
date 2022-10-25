import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <section className="bg-black w-[100vw] h-[100vh] flex justify-center items-center">
      <Head>
        <title>Testing</title>
        <meta name="keywords" content="hello,world"></meta>
      </Head>
      <div className=" bg-black text-white text-[32px] font-semibold">
        Welcome to next js
      </div>
    </section>
  );
};

export default Home;
