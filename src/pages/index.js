import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Container section wrapperSm>
			<p
				style={{
					textAlign: 'center',
					fontSize: '2rem',
				}}
			>
				Welcome to
			</p>
			<Fade triggerOnce>
				<Title tag='h1' center>
					Gatsby Starter Stormcloud
				</Title>
			</Fade>
		</Container>
	</Layout>
)

export default IndexPage
