import React from 'react'
import Layout from '@global/layout/layout'
import Seo from '@global/seo'
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
				Welcome to{' '}
			</p>
			<Title tag='h1'>Gatsby Starter Stormcloud</Title>
		</Container>
	</Layout>
)

export default IndexPage
