import React from 'react'
import Link from 'gatsby-link'
import Background from './9029-web.jpg';

const Header = () => (
    <div className='vh-50 dt w-100 tc bg-dark-gray cover'
      style={{
        background: `url(${Background}) no-repeat center`
      }}
    >

      <h1 className='f1 f-headline-l fw8'>
        <Link
          to="/"
          style={{
            color: '#999999',
            textDecoration: 'none'
          }}
        >
          Yoga with Angela
        </Link>
      </h1>

      <blockquote className="ph0 mh0 measure-wide f5 lh-copy center">
        <p className="washed-blue">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </p>
      </blockquote>
    </div>
)

export default Header
