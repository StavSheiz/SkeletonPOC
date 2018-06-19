<template>
	<div id="qButton_app" @click="my_alert('q Clicked')">
		Qb
	</div>
</template>

<script>

export default {
	name: 'qButton_app',
	methods: {
		my_alert (text) {
			alert(text);
		}
	}
};

</script>

<style lang="less">
	#qButton_app {
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
