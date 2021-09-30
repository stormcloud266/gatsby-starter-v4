import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Container section wrapperSm textBlock textCenter>
			<p>Welcome to</p>
			<Fade triggerOnce>
				<Title tag='h1'>Gatsby Starter Stormcloud</Title>
			</Fade>
		</Container>
	</Layout>
)

export default IndexPage
