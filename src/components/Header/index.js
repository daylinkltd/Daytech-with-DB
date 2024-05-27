"use client"
import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState, useEffect } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [percent, setPercent] = useState(0);

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPercent((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const toggle = () =>{
  setClick(!click)
}
  return (
    <>

    <header className="w-full sticky top-0 z-50 backdrop-blur-sm bg-light/70 dark:bg-dark/70 p-2 px-5 sm:px-10
      border-b border-dark/10 dark:border-light/10 flex items-center justify-between">
      {/* Page Scroll Progress */}
        <Logo mode={mode}/>

        <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
            transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
            }}

            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: click ? 0 : 1
            }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
            }}
            >&nbsp;</span>
            </div>

          </div>
        </button>

        <nav className=" w-max py-3 px-6 sm:px-8  font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/60 text-black dark:bg-dark/60 dark:text-light backdrop-blur-sm overflow-hidden z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "4rem" : "-5rem"
        }}

        >
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/categories/all" className="mr-2">Categories</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>


        <nav className=" w-max py-1 px-4 rounded-full font-medium capitalize  items-center hidden sm:flex
        top-6 bg-light/60 text-black dark:bg-dark/60 dark:text-light backdrop-blur-sm z-50">
            <Link href="/" className="mr-2">Home</Link>
            <Link href="/categories/all" className="mr-2">Categories</Link>
            <Link href="/about" className="mx-2">About</Link>
            <Link href="/contact" className="mx-2">Contact</Link>
            <Link href="/dashboard" className="mx-2">Login</Link>
            <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button>
        </nav>
        {/* <div className=" hidden sm:flex items-center">
            <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon className="hover:scale-125 transition-all ease duration-200" /></a>
            <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
            <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon className="hover:scale-125 transition-all ease duration-200" /></a>
          </div> */}
    </header>
    <div className="bg-[#670E10] dark:bg-[#ffdc48] h-2 z-50 fixed rounded-full" style={{ width: `${percent}%` }}></div>
    </>
  )
}

export default Header;
