import React from 'react'
import Link from 'gatsby-link'
import Background from './9029-web.jpg';

const Header = () => (
  <div
    style={{
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        backgroundImage: `url(${Background})`,
        margin: '0 auto',
        maxWidth: 960,
        minHeight: 300,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      <div
        style={{
          alignItems: 'flex-end'
        }}
      >
        <h1 style={{ margin: 0, flexAlign: 'bottom', fontSize: '2.6em' }}>
          <Link
            to="/"
            style={{
              color: '#505050',
              textDecoration: 'none'
            }}
          >
            Yoga with Angela
          </Link>
        </h1>
      </div>
    </div>
  </div>
)

export default Header
