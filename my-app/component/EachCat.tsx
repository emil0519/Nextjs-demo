import Link from "next/link";

function EachCat({ item }: any) {
  return (
    <section key={item.id}>
      {" "}
      <Link href="/cat/[id]" as={`/cat/${item.id}`}>
        <img
          src={item.url}
          className="w-[100px] h-[100px] mr-[12px]"
          alt=""
        ></img>
      </Link>
    </section>
  );
}

export default EachCat;
