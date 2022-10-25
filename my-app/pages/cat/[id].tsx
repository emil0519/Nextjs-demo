import { useRouter } from "next/router";

function cat({ thisCat }: any) {
  console.log("original");
  const router = useRouter();
  const { id } = router.query;

  return (
    <section className="flex flex-col">
      <span>This is cat {id}</span>{" "}
      <img src={thisCat.url} alt="" className="w-[100px] h-[100px]"></img>
    </section>
  );
}
export const getServerSideProps = async (context: any) => {
  // fetch at request
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/${context.params.id}`
  );
  //   context have to be context.params.id that contains id of dynamic parameter
  const thisCat = await res.json();
  return {
    props: { thisCat },
  };
};
export default cat;
