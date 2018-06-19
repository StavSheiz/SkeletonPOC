<template>
	<div id="fButton_app" @click="my_alert('f Clicked')">
		Fb
	</div>
</template>

<script>

export default {
	name: 'fButton_app',
	methods: {
		my_alert (text) {
			alert(text);
		}
	}
};

</script>

<style lang="less">
	#fButton_app {
		width: 30px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a2e682;
		font-weight: bold;
		cursor: pointer;
	}
</style>
