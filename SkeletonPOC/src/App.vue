<template>
	<div id="app">
		<div id="nav">
			<div id="rightSide" class="navItem">
				<div id="navIcon">Icon</div>
				<div id="sButton">S</div>
				<div id="fButton">F</div>
				<div id="qButton">Q</div>
				<div id="aButton">A</div>
			</div>
			<a href="#" class="navItem">Home</a>
			<a href="#/stuTest" class="navItem">stuTest</a>
			<div id="leftSide" class="navItem">
				<div id="navUserDesc">מחובר כמשתמש כלשהו - בתפקיד מסויים</div>
				<div>U</div>
			</div>
		</div>
		<div id="content">
			Content here
		</div>
		<footer id="footer">
			footer
		</footer>
	</div>
</template>

<style lang="less">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;

	#aaa_mountPoint {
		width: 100%;
		height: 100%;
	}
}
#nav {
	background-color: #5b5b5b;
    display: flex;
    height: 60px;
    -webkit-box-align: center;
    align-items: center;
    direction: rtl;
    position: relative;
    justify-content: space-evenly;

	.navItem {
		color: white;
		box-sizing: border-box;
	}

	#leftSide {
		display: flex;
		height: 100%;
		padding: 10px 0;
		position: absolute;
		left: 0;

		#navUserDesc {
			width: 300px;
		}

		div {
			width: 30px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgb(162, 230, 130);
			font-weight: bold;
			border-left: 1px solid black;
			cursor: pointer;
		}
	}

	#rightSide {
		display: flex;
		height: 100%;
		padding: 10px 0;
		position: absolute;
		right: 0;

		#navIcon {
			width: 70px;
		}

		div {
			width: 30px;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgb(162, 230, 130);
			font-weight: bold;
			border-left: 1px solid black;
			cursor: pointer;
		}
	}

	a {
		font-weight: bold;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
#content {
	background-color: #eaeaea;
    flex: 1;
}
#footer {
	height: 50px;
	background-color: #c7c7c7;
}
</style>
