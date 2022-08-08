import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TableOfContents from "../components/TableOfContents"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const thumbnail = getImage(post.frontmatter.thumbnail)

  return (
    <Layout location={location} title={siteTitle}>
      <div className="flex max-w-5xl mx-auto">
        <article className="prose dark:prose-invert max-w-3xl w-full prose-a:text-violet-500">
          <header>
            <GatsbyImage image={thumbnail} className="mb-4" />
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>

          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
        {post.tableOfContents && (
          <aside className="relative w-64 hidden lg:block">
            <TableOfContents contents={post.tableOfContents} />
          </aside>
        )}
      </div>
      {/* <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
      <footer>{/* <Bio /> */}</footer>
    </Layout>
  )
}

export const Head = ({
  data: {
    markdownRemark: post,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      thumbnail={`${siteUrl}${post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback.src}`}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "M월 D일, YYYY")
        title
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      tableOfContents
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
