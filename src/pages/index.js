import React from 'react'
import { Link } from 'gatsby'

import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container } from '@UI'

const IndexPage = () => (
	<Layout>
		<Seo title='Home' />
		<Container wrapperSm section textBlock>
			<h2>Hello</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio
				minima magni, modi molestiae reiciendis illo? Totam cumque eum
				temporibus!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odio
				minima magni, modi molestiae reiciendis illo? Totam cumque eum
				temporibus!
			</p>
			<Link to='/examples'>Examples Page</Link>
		</Container>
	</Layout>
)

export default IndexPage
