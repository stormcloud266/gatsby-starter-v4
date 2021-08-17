import React from 'react'
import { Link } from 'gatsby'

import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container, Flex } from '@UI'

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
			<Container wrapper section>
				<Flex justify='space-between' collapseOnMd>
					<div
						style={{
							background: 'orange',
							height: '50px',
							width: '100%',
						}}
					>
						okay
					</div>
					<div
						style={{
							background: 'orange',
							height: '50px',
							width: '100%',
						}}
					>
						okay
					</div>
					<div
						style={{
							background: 'orange',
							height: '50px',
							width: '100%',
						}}
					>
						okay
					</div>
				</Flex>
			</Container>
		</Container>
	</Layout>
)

export default IndexPage
