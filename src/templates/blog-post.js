import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {
        const {
            title
        } = this.props.data.contentfulPost;
        return (
            <h1>
                {title}
            </h1>
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
        }
    }
`