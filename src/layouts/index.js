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
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div className="fl w-70 bg-dark-gray pa3">
        {children()}
      </div>
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
