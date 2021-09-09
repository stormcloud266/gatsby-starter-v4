import React from 'react'
import PropTypes from 'prop-types'

import Header from '@global/header/header'
import Footer from '@global/footer/footer'
// import CookieBanner from '@global/cookieBanner'

import './globalStyles/global.scss'

const Layout = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
		<Footer />
		{/* <CookieBanner /> */}
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
