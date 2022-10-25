function Header() {
  return (
    <section className="w-[100vw] h-[max-content] flex flex-col items-center justify-center bg-black">
      <div>
        <span className="text-[#4a95bc] text-[24px] font-bold">WebDev</span>{" "}
        News
      </div>
      <div className="text-[16px] text-white">
        Keep up to date with the latest web dev news
      </div>
    </section>
  );
}

export default Header;
