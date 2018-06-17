<template>
	<div class="stuTest_hello">
		<h1>Welcome to application Stav!</h1>
		<p>
			{{msg}}
		</p>
		<div>
			<button @click="logicOne">Logic 1</button>
			<button @click="logicTwo">Logic 2</button>
			<button @click="logicThree">Logic 3</button>
		</div>
		<div>
			<h3>Value: {{value}}</h3>
		</div>
	</div>
</template>

<script>
import applicationLogic from '../logic/st_applicationLogic';

export default {
	name: 'ApplicationHeader',
	props: {
		msg: String
	},
	data: () => {
		return {
			value: ''
		};
	},
	methods: {
		logicOne () {
			this.value = applicationLogic.getRandomNumber();
		},
		logicTwo () {
			this.value = applicationLogic.multiplyNumbers(3, 4);
		},
		logicThree () {
			applicationLogic.getServerData().then((data) => {
				this.value = data;
			});
		}
	}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.stuTest_hello {
	h3 {
	margin: 40px 0 0;
	}
	ul {
	list-style-type: none;
	padding: 0;
	}
	li {
	display: inline-block;
	margin: 0 10px;
	}
	a {
	color: #42b983;
	}
	button {
	margin: 5px;
	border-radius: 5px;
	padding: 10px;
	background-color: white;
	border-color: #42b983;
	cursor: pointer;
	}
	button:hover {
	background-color: #42b983;
	color: white;
	transition: ease-in-out 0.3s;
	}
}
</style>
