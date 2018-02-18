import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Buttons from '../components/Buttons'
import Footer from '../components/Footer'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Yoga With Angela"
      meta={[
        { name: 'description', content: 'Yoga classes with Angela Collins' },
        { name: 'keywords', content: 'yoga' },
      ]}
    />
    <Header />
    <Buttons />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>

)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
