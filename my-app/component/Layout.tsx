import Header from "./Header";
import Nav from "./Nav";

function Layout({ children }: any) {
  return (
    <>
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
