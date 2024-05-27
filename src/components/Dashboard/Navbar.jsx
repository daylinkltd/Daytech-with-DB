"use client"
import Link from "next/link";
import { MoonIcon, SunIcon } from "../Icons";
import { cx } from "@/src/utils";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";


export default function Navbar () {
  const [mode, setMode] = useThemeSwitch();
  return (
    <nav className="flex justify-end gap-3 items-center bg-slate-800 px-8 py-3">
      <Link href={'/dashboard'} className="bg-white rounded-sm p-2">Dashboard</Link>
      <Link href={'/dashboard/blogs'} className="bg-white rounded-sm p-2">Blogs</Link>
      <Link href={'/dashboard/tags'} className="bg-white rounded-sm p-2">Categories</Link>
      <Link href={"/"} className="bg-white rounded-sm p-2">Logout</Link>
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
  )
}
