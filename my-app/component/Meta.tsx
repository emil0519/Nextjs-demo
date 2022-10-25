import Head from "next/head";

type MetaProps = {
  title: string;
  keywords: string;
  description: string;
};

function Meta({ title, keywords, description }: MetaProps) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Testing title",
  keywords: "test,key",
  description: "this is testing descripiton",
};

export default Meta;
