import React from 'react'
import { Layout, Seo } from '@global'
import { Container, Title } from '@UI'
import { Slide, Fade } from '@animations'

const IndexPage = () => (
	<Layout>
		<Seo />

		<Container
			section
			wrapper
			textCenter
			style={{
				minHeight: '82vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Fade x={40} threshold={0.8} noOpacityAnim transformDuration={1.7}>
				<Slide
					from='right'
					style={{
						margin: '0 auto',
						padding: '8px',
					}}
				>
					<Title tag='h1'>Gatsby Starter Stormcloud</Title>
				</Slide>
			</Fade>
		</Container>
	</Layout>
)

export default IndexPage
