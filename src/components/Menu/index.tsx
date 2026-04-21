"use client"

import Image from "next/image"
import {
	type ChangeEvent,
	type CSSProperties,
	memo,
	type ReactNode,
	useRef,
} from "react"
import { formatStringAsId } from "@/util/idGenerator"
import { Link } from "../Link"
import style from "./style.module.css"

type TopMenuItem = {
	label: string
	url: string
	items?: SubMenuItem[]
}

type SubMenuItem = {
	label: string
	url?: string
}

export type MenuType = TopMenuItem[]

function MutableMenu({
	model,
	mobileHomeText,
	language,
	shortcutComponent,
	mobileStyle = {},
	desktopStyle = {},
	fakeRef = false, // This is to allow the component to be used in a test environment without a real ref
}: Readonly<{
	model: MenuType
	mobileHomeText: string
	language: string
	shortcutComponent?: ReactNode
	mobileStyle?: CSSProperties
	desktopStyle?: CSSProperties
	fakeRef?: boolean
}>) {
	const sideMenuRef = useRef<HTMLInputElement>(null)

	const replaceWithTopMenuUrlIfAHashlinkOrEmpty = (
		topMenuUrl: string,
		url?: string,
	) => {
		if (url === undefined || url === "") return topMenuUrl
		return url.replace(/^#/, `${topMenuUrl}#`)
	}

	const unCheckSideMenu = () => {
		if (sideMenuRef.current) {
			sideMenuRef.current.checked = false
			document.body.style.overflow = "auto"
		}
	}

	const onSideMenuChange = (event: ChangeEvent<HTMLInputElement>) => {
		document.body.style.overflow = event.target.checked ? "hidden" : "auto"
	}

	const subMenu = (subMenu: SubMenuItem[], topMenuUrl: string) =>
		subMenu.map((subMenuItem) => (
			<li key={subMenuItem.label} role="presentation">
				<Link
					href={`/${language}${replaceWithTopMenuUrlIfAHashlinkOrEmpty(
						topMenuUrl,
						subMenuItem.url,
					)}`}
					role="menuitem"
					onClick={unCheckSideMenu}
				>
					{subMenuItem.label}
				</Link>
			</li>
		))

	const desktopTopMenu = model.map((topMenuItem) => {
		const hasChild = topMenuItem.items

		return (
			<li
				key={topMenuItem.label}
				role="presentation"
				className={hasChild ? style.subnav : ""}
			>
				<div>
					<Link
						href={`/${language}${topMenuItem.url}`}
						role="menuitem"
					>
						{topMenuItem.label}
					</Link>
					{topMenuItem.items && (
						<div
							role="presentation"
							className={style["subnav-content"]}
						>
							{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
							<ul role="menu">
								{subMenu(topMenuItem.items, topMenuItem.url)}
							</ul>
						</div>
					)}
				</div>
			</li>
		)
	})

	const mobileTopMenu = model.map((topMenuItem) => {
		const hasChild = topMenuItem.items

		return (
			<li
				key={topMenuItem.label}
				role="presentation"
				className={hasChild ? style.subnav : ""}
			>
				<div>
					<input
						className={style["top-menu"]}
						type="radio"
						name="top-menu"
						id={formatStringAsId(topMenuItem.label)}
					/>
					{hasChild ? (
						// biome-ignore lint/a11y/useFocusableInteractive: Expected
						<label
							// biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected
							role="menuitem"
							htmlFor={formatStringAsId(topMenuItem.label)}
						>
							{topMenuItem.label}
						</label>
					) : (
						<Link
							href={`/${language}${topMenuItem.url}`}
							role="menuitem"
							onClick={unCheckSideMenu}
						>
							{topMenuItem.label}
						</Link>
					)}
					{topMenuItem.items && (
						<div
							role="presentation"
							className={style["subnav-content"]}
						>
							{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
							<ul role="menu">
								{subMenu(topMenuItem.items, topMenuItem.url)}
							</ul>
						</div>
					)}
				</div>
			</li>
		)
	})

	return (
		<div className={style.general}>
			<div className={style.mobile__nav} style={mobileStyle}>
				<input
					className={style["side-menu"]}
					type="checkbox"
					id="side-menu"
					ref={fakeRef ? null : sideMenuRef}
					onChange={onSideMenuChange}
				/>
				<div className={style["mobile-menu"]}>
					<label
						className={style.hamb}
						htmlFor="side-menu"
						aria-label="Main Menu"
					>
						<span className={style["hamb-line"]}></span>
						<span className={"visually-hidden"}>
							Hamburger Menu
						</span>
					</label>
					<Link
						href={`/${language}`}
						tabIndex={-1}
						styling="None"
						onClick={unCheckSideMenu}
						className="font-bold"
					>
						{mobileHomeText}
					</Link>
					{shortcutComponent}
				</div>
				{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
				<nav role="menubar" className={style.menu}>
					{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
					<ul role="menu" aria-orientation="horizontal">
						{mobileTopMenu}
					</ul>
				</nav>
			</div>
			<div className={style.desktop__nav} style={desktopStyle}>
				{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
				<nav role="menubar" className={style.menu}>
					{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
					<ul role="menu" aria-orientation="horizontal">
						{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
						{/* biome-ignore lint/a11y/useFocusableInteractive: Expected */}
						<li role="menuitem">
							<Link
								href={`/${language}`}
								className={style["home-logo"]}
							>
								<Image
									src="/images/home-link.png"
									alt="home link"
									height={20}
									width={20}
								/>
							</Link>
						</li>
						{desktopTopMenu}

						{/* biome-ignore lint/a11y/noNoninteractiveElementToInteractiveRole: Expected */}
						{/* biome-ignore lint/a11y/useFocusableInteractive: Expected */}
						<li role="menuitem">{shortcutComponent}</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export const Menu = memo(MutableMenu, () => true)