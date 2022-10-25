import Link from "next/link";

function Nav() {
  return (
    <section className="w-[100vw] h-[10vh] bg-black flex mt-[24px]">
      <div className="mr-[12px] w-[max-content] pr-[12px]">
        <Link href="/">Home</Link>
      </div>
      <div className="mr-[12px]">
        <Link href="/about">About</Link>
      </div>
    </section>
  );
}

export default Nav;
