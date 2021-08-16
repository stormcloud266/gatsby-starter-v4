import React from 'react'
import { Link } from 'gatsby'

import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container } from '@UI'

const IndexPage = () => (
	<Layout>
		<Seo title='Home' />
		<Container wrapperSm section textBlock>
			<h1>Hello</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
				deserunt facere enim ullam quos expedita repellat inventore porro quam
				dolorum.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
				deserunt facere enim ullam quos expedita repellat inventore porro quam
				dolorum.
			</p>
			<Link to='/examples'>Examples Page</Link>
		</Container>
		<Container bgAccent>
			<Container wrapperSmOnTab section flex justify='space-between'>
				<h2>Hey</h2>
				<h2>Hey</h2>
				<h2>Hey</h2>
				<h2>Hey</h2>
			</Container>
		</Container>
	</Layout>
)

export default IndexPage
