import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="max-w-3xl mx-auto">
        <ul>
          {posts.map(post => {
            const image = getImage(post.frontmatter.thumbnail)
            return (
              <li
                key={post.fields.slug}
                className="group border-b border-b-slate-100 dark:border-b-slate-800 last:border-b-transparent transition-all "
              >
                <Link
                  to={post.fields.slug}
                  className="border-b last:border-b-transparent"
                >
                  <div className="w-full flex justify-between items-center py-4 px-2 gap-2 ">
                    <div className="flex-1">
                      <span className="text-gray-400 text-sm underline-offset-2 group-hover:underline dark:text-gray-200">
                        {post.frontmatter.date}
                      </span>

                      <h2 className="mb-1 text-lg font-bold underline-offset-2 group-hover:underline dark:text-slate-100">
                        {post.frontmatter.title}
                      </h2>

                      <p className="text-gray-500 text-sm underline-offset-2 group-hover:underline dark:text-gray-400">
                        {post.frontmatter.description}
                      </p>
                    </div>

                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden">
                      <GatsbyImage
                        image={image}
                        alt="thunbnail-image"
                        className="transition-all group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "M월 D일, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 128, height: 128)
            }
          }
        }
      }
    }
  }
`
