import Image from "next/image";
import errorIMG from "../img/404IMG.png";

function NotFound() {
  return (
    <section className="w-[100%] flex items-center justify-center">
      <Image src={errorIMG} alt="" className="w-[60vw] h-[40vh]" />
      {/* <img className="w-[50%] h-[fit-content]" src={errorIMG.src} alt=""></img> */}
      {/* lazy loading by default, optimized file size, layout would not shift when loading */}
    </section>
  );
}

export default NotFound;
