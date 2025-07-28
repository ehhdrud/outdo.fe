import { css } from '@emotion/react';

/**
 * CSS 스타일 초기화
 */
const reset = css`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		letter-spacing: -0.6px;
	}

	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		border: 0;
		font-size: inherit;
		font-family: inherit;
		vertical-align: baseline;
	}

	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol,
	ul,
	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button,
	a,
	input,
	textarea,
	select {
		color: inherit;
		font-size: inherit;
		font: inherit;
	}
	button,
	a {
		cursor: pointer;
	}
	input,
	textarea,
	select {
		&:disabled {
		}
	}
	input:read-only,
	input[type='date']:read-only,
	textarea:read-only {
	}
	textarea {
	}
	input[type='date'],
	select {
		background-color: #fff;
		appearance: none;
		-webkit-appearance: none;
	}
	img {
		display: block;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		/* content: ''; */
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export default reset;
