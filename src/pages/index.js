import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '@global/layout/layout'
import Seo from '@global/seo'
import { Container, Flex, Card, Title, Grid } from '@UI'

const IndexPage = ({ data }) => (
	<Layout>
		<Seo />
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
			<Link to='/examples' className='button cta'>
				Examples Page
			</Link>
		</Container>

		<Container bgAccent>
			<Container wrapper section textBlock>
				<Flex autoLayout>
					<div>
						<h1>Hello</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							deserunt facere enim ullam quos expedita repellat inventore porro
							quam dolorum.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							deserunt facere enim ullam quos expedita repellat inventore porro
							quam dolorum.
						</p>
						<button onClick={() => console.log('hi')}>Examples Page</button>
					</div>
					<div>
						<h1>Hello</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							deserunt facere enim ullam quos expedita repellat inventore porro
							quam dolorum.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
							deserunt facere enim ullam quos expedita repellat inventore porro
							quam dolorum.
						</p>
						<a href='https://music.com'>Examples Page</a>
					</div>
				</Flex>
			</Container>
		</Container>

		<Container wrapper section>
			<Title>hello</Title>
			<Flex justify='space-between' align='center' collapseOnMd autoLayout>
				<Card image={data.cardImage} shadow>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<h3>Lorem ipsum dolor sit amet.</h3>
							<p>
								Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Quam laboriosam exercitationem
								quisquam.
							</p>
						</div>
						<a href='/' className='button'>
							click
						</a>
					</div>
				</Card>
				<Card image={data.cardImage} outline>
					<div
						style={{
							display: 'flex',
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<h3>Lorem ipsum dolor sit amet.</h3>
							<p>Lorem ipsum</p>
						</div>
						<a href='/' className='button'>
							click
						</a>
					</div>
				</Card>
				<Card image={data.cardImage} outline>
					<div
						style={{
							display: 'flex',
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<h3>Lorem ipsum dolor sit amet.</h3>
							<p>Lorem ipsum</p>
						</div>
						<a href='/' className='button'>
							click
						</a>
					</div>
				</Card>
			</Flex>
		</Container>

		<Container bgAccent>
			<Container section wrapper>
				<Grid columns={5} gap='lg'>
					{['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4'].map(
						(item) => (
							<div
								style={{
									width: '100%',
									height: 60,
									background: 'pink',
								}}
							>
								{item}
							</div>
						)
					)}
				</Grid>
			</Container>
		</Container>
	</Layout>
)

export default IndexPage

export const query = graphql`
	query HomePageQuery {
		cardImage: file(relativePath: { eq: "meta-card-banner.png" }) {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED, width: 400, placeholder: BLURRED)
			}
		}
	}
`
