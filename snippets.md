## Code Snippets

### Static Query

```js
const data = useStaticQuery(graphql`
	query HeaderQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`)
```

### Page Query

```js
export const query = graphql`
	query HomePageQuery {
		image: file(relativePath: { eq: "image.png" }) {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED, width: 350, placeholder: BLURRED)
			}
		}
	}
`
```

### Gatsby StaticImage

```js
import { StaticImage } from 'gatsby-plugin-image'

export function Dino() {
	return (
		<StaticImage
			src='../images/dino.png'
			alt='A dinosaur'
			placeholder='blurred'
			layout='fixed'
			width={200}
			height={200}
		/>
	)
}
```

### Gatsby DynamicImage

```js
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function BlogPost({ data }) {
	const image = getImage(data.blogPost.avatar)
	return <GatsbyImage image={image} alt={data.blogPost.author} />
}

export const pageQuery = graphql`
	query {
		blogPost(id: { eq: $Id }) {
			avatar {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
				}
			}
		}
	}
	#
`
```

### Stop FOUT on load

```scss
.title {
	opacity: 0;
	transition: opacity 0.5s;
}

:global(html.wf-active),
:global(html.wf-inactive) {
	.title {
		opacity: 1;
	}
}
```
