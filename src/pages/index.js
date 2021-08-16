import React from 'react'
import { Link } from 'gatsby'

import Layout from '@global/layout/layout'
import Seo from '@global/seo'

const IndexPage = () => (
	<Layout>
		<Seo title='Home' />

		<section className='wrapper-sm section text-block'>
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
		</section>
	</Layout>
)

export default IndexPage
