import React from 'react'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'
import { Fade } from '@animations'

const IndexPage = () => (
	<Layout>
		<Seo />
		<Container
			section
			wrapper
			textBlock
			textCenter
			style={{ minHeight: '82vh', display: 'flex', alignItems: 'center' }}
		>
			<Title tag='h1' style={{ margin: '0 auto', display: 'block' }}>
				<Fade inline y={30}>
					Gatsby
				</Fade>{' '}
				<Fade inline delay={0.33} y={30}>
					Starter
				</Fade>{' '}
				<Fade inline delay={0.66} y={30}>
					Stormcloud
				</Fade>
			</Title>
		</Container>
	</Layout>
)

export default IndexPage
