const React = require("react")
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `ko` })
  setPreBodyComponents([
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
          let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

          darkQuery.addEventListener('change', e => {
            e.matches ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
          })
        `,
      },
    }),
  ])
}
