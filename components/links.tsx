import React from "react";
import Image from "next/image";

const Links: React.FC = () => {
  return (
    <ul className="text-white text-4xl container px-4 justify-center  max-w-lg" >
      < li className="bg-[#252931AA] hover:bg-[#353941CC] py-2 rounded-full my-6 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"> <a className="flex items-center justify-center gap-3" href="https://www.linkedin.com/in/matheus-barbieri">
        <Image
          src="/linkedin.svg"
          alt="linkedin"
          width={40}
          height={40}
        />
        LinkedIn
      </a>
      </li >
      < li className="bg-[#252931AA] hover:bg-[#353941CC] py-2 rounded-full my-6 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]" > <a className="flex items-center justify-center gap-3" href="https://blog.msbarbieri.dev">
        <Image
          src="/home.svg"
          alt="Home Site"
          width={40}
          height={40}
        />
        Official Website
      </a>
      </li>
      < li className="bg-[#252931AA] hover:bg-[#353941CC] py-2 rounded-full my-6 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]" > <a className="flex items-center justify-center gap-3" href="https://www.twitch.tv/mattbarbieri">
        <Image
          src="/twitch.svg"
          alt="twitch.tv"
          width={40}
          height={40}
        />
        Twitch
      </a>
      </li>
      < li className="bg-[#252931AA] hover:bg-[#353941CC] py-2 rounded-full my-6 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]" > <a className="flex items-center justify-center gap-3" href="https://www.twitter.com/msbarbieri_">
        <Image
          src="/twitter.svg"
          alt="twitter"
          width={40}
          height={40}
        />
        Twitter
      </a>
      </li>
    </ul >
  )
}

export default Links;
