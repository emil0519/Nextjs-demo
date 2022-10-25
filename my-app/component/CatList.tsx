import EachCat from "./EachCat";

function CatList({ cats }: any) {
  return (
    <>
      {cats.map((item: any, index: number) => (
        <>
          <EachCat item={item} />
        </>
      ))}
    </>
  );
}

export default CatList;
