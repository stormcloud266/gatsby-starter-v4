import React from 'react'
import { Layout, Seo } from '@global'
import { Container, Button, Title } from '@UI'

const NotFoundPage = () => {
	return (
		<Layout>
			<Seo title='Not Found' />
			<Container section wrapperSm textBlock textCenter>
				<Title>Page Not Found</Title>
				<p>The page you were looking for does not exist.</p>
				<Button to='/'>Return Home</Button>
			</Container>
		</Layout>
	)
}

export default NotFoundPage
