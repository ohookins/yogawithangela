import React from 'react'
import Link from 'gatsby-link'

const Buttons = () => (
    <div style={{
        display:'flex',
        justifyContent: 'center'
    }}>
        <div className="w-70 bg-dark-gray">
            <div className="cabin f5" style={{
                display:'flex',
                justifyContent: 'center'
            }}>
                <Link to="/" className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    Home
                </Link>
                <Link to="/about/"
                    className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    About
                </Link>
                <Link to="/reviews/"
                    className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    Reviews
                </Link>
                <a href="https://twitter.com/Yogawithangela"
                    target="_blank"
                    className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    Twitter
                </a>
                <a href="https://www.instagram.com/angelacollinsyoga/"
                    target="_blank"
                    className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    Instagram
                </a>
                <a href="https://www.youtube.com/channel/UCPjagnHjQMiY39FiXsx6EOQ"
                    target="_blank"
                    className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    YouTube
                </a>
                <a href="mailto:angela@angela.yoga" className="link dim ph4 pv2 mb2 dib white-90 bg-mid-gray">
                    Contact
                </a>
            </div>
        </div>
    </div>
);
  
export default Buttons
  