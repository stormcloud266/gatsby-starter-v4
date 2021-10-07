import { useState, useEffect } from 'react'

export default function useCurrentWidth() {
	// save current window width in the state object
	const [width, setWidth] = useState(0)

	// in this case useEffect will execute only once because
	// it does not have any dependencies.
	useEffect(() => {
		setWidth(window.innerWidth)

		const resizeListener = () => {
			// change width from the state object
			setWidth(window.innerWidth)
		}
		// set resize listener
		window.addEventListener('resize', resizeListener)

		// clean up function
		return () => {
			// remove resize listener
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	return width
}
