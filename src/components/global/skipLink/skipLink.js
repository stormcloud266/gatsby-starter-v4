import React from 'react'
import { Button } from '@UI'
import * as styles from './skipLink.module.scss'

const SkipLink = ({ main }) => (
	<Button
		className={styles.skip}
		to='#main'
		onClick={() => main.current.focus()}
	>
		Skip to Main Content
	</Button>
)
export default SkipLink
