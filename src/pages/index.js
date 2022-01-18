import React from 'react'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'
import { Fade } from '@animations'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Container section wrapperSm textBlock textCenter>
			<p>Welcome to</p>
			<Fade>
				<Title tag='h1'>Gatsby Starter Stormcloud</Title>
			</Fade>
		</Container>
	</Layout>
)

export default IndexPage
