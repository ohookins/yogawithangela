import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {
        const {
            title,
            bodyText
        } = this.props.data.contentfulPost;
        return (
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: bodyText.childMarkdownRemark.html}} />
            </div>
        )
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            title
            slug
            bodyText {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
