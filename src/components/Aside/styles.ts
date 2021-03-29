import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  body {
	background: #ffea92;
	margin: 0;
	font-family: "Open Sans", Helvetica Neue, Helvetica, Arial, sans-serif;
	color: #fff;
	padding-left: 240px;
}
main {
	position: relative;
	height: 100vh;
	.helper {
		background: rgba(0, 0, 0, 0.2);
		color: #ffea92;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
		padding: 1.2em 2em;
		text-align: center;
		border-radius: 20px;
		font-size: 2em;
		font-weight: bold;
		span {
			color: rgba(0, 0, 0, 0.2);
			font-size: 0.4em;
			display: block;
		}
	}
}
.menu {
	background: #27283c;
	height: 100vh;
	width: 240px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	outline: none;
	.avatar {
		background: rgba(0, 0, 0, 0.1);
		padding: 2em 0.5em;
		text-align: center;
		img {
			width: 100px;
			border-radius: 50%;
			overflow: hidden;
			border: 4px solid #ffea92;
			box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
		}
		h2 {
			font-weight: normal;
			margin-bottom: 0;
		}
	}
	ul {
		list-style: none;
		padding: 0.5em 0;
		margin: 0;
		li {
			padding: 0.5em 1em 0.5em 3em;
			font-size: 0.95em;
			font-weight: regular;
			background-repeat: no-repeat;
			background-position: left 15px center;
			background-size: auto 20px;
			transition: all 0.15s linear;
			cursor: pointer;
			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
			&:focus {
				outline: none;
			}
		}
		li.icon-dashboard {
			background-image: url("http://www.entypo.com/images//gauge.svg");
		}
		li.icon-customers {
			background-image: url("http://www.entypo.com/images//briefcase.svg");
		}
		li.icon-users {
			background-image: url("http://www.entypo.com/images//users.svg");
		}
		li.icon-settings {
			background-image: url("http://www.entypo.com/images//tools.svg");
		}
	}
}
@media (max-width: 480px) {
	body {
		padding-left: 90px;
	}
	.menu {
		width: 90px;
		.avatar {
			padding: 0.5em;
			position: relative;
			img {
				width: 60px;
			}
			h2 {
				opacity: 0;
				position: absolute;
				top: 50%;
				left: 100px;
				margin: 0;
				min-width: 200px;
				border-radius: 4px;
				background: rgba(0, 0, 0, 0.4);
				transform: translate3d(-20px, -50%, 0);
				transition: all 0.15s ease-in-out;
			}
			&:hover {
				h2 {
					opacity: 1;
					transform: translate3d(0px, -50%, 0);
				}
			}
		}
		ul {
			li {
				height: 60px;
				background-position: center center;
				background-size: 30px auto;
				position: relative;
				span {
					opacity: 0;
					position: absolute;
					background: rgba(0, 0, 0, 0.5);
					padding: 0.2em 0.5em;
					border-radius: 4px;
					top: 50%;
					left: 80px;
					transform: translate3d(-15px, -50%, 0);
					transition: all 0.15s ease-in-out;
					&:before {
						content: '';
						width: 0;
						height: 0;
						position: absolute;
						top: 50%;
						left: -5px;
						border-top: 5px solid transparent;
						border-bottom: 5px solid transparent;
						border-right: 5px solid rgba(0, 0, 0, 0.5);
						transform: translateY(-50%);
					}
				}
				&:hover {
					span {
						opacity: 1;
						transform: translate3d(0px, -50%, 0);
					}
				}
			}
		}
	}
}

`;

export const LinkAction = styled(Link)`
	color: #fff;
	text-decoration: none;
`;