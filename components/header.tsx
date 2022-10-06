import React from "react";
import Image from "next/image";


const Header: React.FC = () => {

  return (
    <>
      <Image
        src='/me.jpg'
        width={1000 / 5} height={1000 / 5}
        alt="matheus barbieri"
        className={`drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] rounded-full`} />
      <div className={`flex-grow-0 transition-opacity duration-1000 overflow-visible`}>
      </div>
      <div className="p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center">
        <h1 className="mb-6 text-4xl xl:text-5xl"> Hello I&apos;m Matheus Barbieri</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight"> <span> Software Engineer </span> </h2>
      </div>
    </>
  )
}

export default Header;
