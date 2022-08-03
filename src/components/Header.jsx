import { Link } from "gatsby"
import * as React from "react"
import Github from "./Github"
import ThemeToggle from "./ThemeToggle"

const Header = ({ title }) => {
  return (
    <header className="sticky top-0 px-4 bg-white/95 backdrop-blur-sm z-10 border-b border-b-violet-200 dark:bg-slate-900/95 dark:text-sky-100 dark:border-b-slate-700">
      <div className="flex justify-between items-center py-2 mx-auto max-w-3xl">
        <Link to={"/"} className="text-2xl font-bold">
          {title}
          <span className="text-violet-300">()</span>
        </Link>

        <div className="flex gap-1 items-center">
          <Github githubId={"curlyjun"} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
