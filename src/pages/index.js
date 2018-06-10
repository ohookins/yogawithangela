import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <div dangerouslySetInnerHTML={{__html: node.bodyText.childMarkdownRemark.excerpt }} />
    </li>
  )
}

const IndexPage = ({data}) => (
  <ul>
    {data.allContentfulPost.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          title
          slug
          bodyText {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
