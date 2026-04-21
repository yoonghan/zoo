"use client"

import { debounce } from "lodash"
import { memo, useEffect, useRef, useState } from "react"
import style from "./ScrollToTop.module.css"

const _isOverTheBar = () => {
	const currentScrollPos = window.scrollY
	return currentScrollPos > 500
}

const ScrollToTopNoSSR = () => {
	const [visible, setVisible] = useState(false)
	const scrollerRef = useRef(
		debounce(() => {
			setVisible(_isOverTheBar())
		}, 50),
	)

	useEffect(() => {
		const scroller = scrollerRef.current
		window.addEventListener("scroll", scroller)
		return () => {
			window.removeEventListener("scroll", scroller)
		}
	}, [])

	const clickScrollUp = () => {
		window.scrollTo(0, 0)
	}

	const scrollStyle = visible ? "" : ` ${style.hidden}`

	return (
		<button
			type="button"
			onClick={clickScrollUp}
			className={style.scroller + scrollStyle}
		>
			Top
		</button>
	)
}

export default memo(ScrollToTopNoSSR, () => true)