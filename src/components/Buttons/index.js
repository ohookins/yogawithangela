import React from 'react'
import Link from 'gatsby-link'

const Buttons = () => (
    <div style={{
        display:'flex',
        justifyContent: 'center'
    }}>
        <Link to="/" className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            Home
        </Link>
        <Link to="/" className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            About
        </Link>
        <Link to="/" className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            Reviews
        </Link>
        <a href="https://twitter.com/Yogawithangela"
            className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            Twitter
        </a>
        <a href="https://www.instagram.com/angelacollinsyoga/"
            className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            Instagram
        </a>
        <a href="https://www.youtube.com/channel/UCPjagnHjQMiY39FiXsx6EOQ" 
            className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            YouTube
        </a>
        <a href="mailto:angela@angela.yoga" className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray">
            Email
        </a>
    </div>
);
  
export default Buttons
  