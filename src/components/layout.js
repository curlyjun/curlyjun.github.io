import * as React from "react"
import Github from "./Github"
import Header from "./Header"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  return (
    <div className="relative dark:bg-slate-900">
      <Header title={title} />
      <main className="relative px-4 pt-4">{children}</main>
      <footer className="max-w-3xl p-4 text-center mx-auto h-24 dark:text-slate-300">
        <div>
          ©<b>curlyjun</b> {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
