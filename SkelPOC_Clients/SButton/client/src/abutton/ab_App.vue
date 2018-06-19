<template>
	<div id="aButton_app" @click="my_alert('a Clicked')">
		Ab
	</div>
</template>

<script>

export default {
	name: 'aButton_app',
	methods: {
		my_alert (text) {
			alert(text);
		}
	}
};

</script>

<style lang="less">
	#aButton_app {
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
