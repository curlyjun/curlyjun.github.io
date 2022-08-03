import * as React from "react"

const TableOfContents = ({ contents }) => {
  return (
    <div
      className="table-of-contents sticky top-24 ml-5"
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  )
}

export default TableOfContents
