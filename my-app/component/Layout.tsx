import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";

function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="w-[40vw] h-[40vh] bg-white">
        <main>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
