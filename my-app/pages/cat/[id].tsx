import { useRouter } from "next/router";

function cat({ thisCat }: any) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section className="flex flex-col">
      <span>This is cat {id}</span>{" "}
      <img src={thisCat.url} alt="" className="w-[100px] h-[100px]"></img>
    </section>
  );
}

export const getStaticPaths = async () => {
  // Create dynamic link for all circumstances?
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  //   context have to be context.params.id that contains id of dynamic parameter
  const cats = await res.json();
  const ids = await cats.map((item: any) => item.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
    //if data is not existed, return 404 page
  };
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/${context.params.id}`
  );
  //   context have to be context.params.id that contains id of dynamic parameter
  const thisCat = await res.json();
  return {
    props: { thisCat },
  };
};

// export const getServerSideProps = async (context: any) => {
//   // fetch at request
//   const res = await fetch(
//     `https://api.thecatapi.com/v1/images/${context.params.id}`
//   );
//   //   context have to be context.params.id that contains id of dynamic parameter
//   const thisCat = await res.json();
//   return {
//     props: { thisCat },
//   };
// };
export default cat;
